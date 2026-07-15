"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LoaderCircle, LockKeyhole } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "登录失败。");
      router.replace("/admin");
      router.refresh();
    } catch (requestError) {
      setError((requestError as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="admin-login-form" onSubmit={handleSubmit}>
      <label htmlFor="admin-password">后台密码</label>
      <div className="admin-password-field">
        <LockKeyhole size={19} aria-hidden />
        <input
          id="admin-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
          autoFocus
        />
        <button
          type="button"
          aria-label={showPassword ? "隐藏密码" : "显示密码"}
          title={showPassword ? "隐藏密码" : "显示密码"}
          onClick={() => setShowPassword((value) => !value)}
        >
          {showPassword ? <EyeOff size={18} aria-hidden /> : <Eye size={18} aria-hidden />}
        </button>
      </div>
      {error ? <p className="admin-form-error" role="alert">{error}</p> : null}
      <button className="admin-primary-button" type="submit" disabled={loading}>
        {loading ? <LoaderCircle className="admin-spin" size={18} aria-hidden /> : <LockKeyhole size={18} aria-hidden />}
        {loading ? "正在登录" : "登录后台"}
      </button>
    </form>
  );
}
