"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Check,
  ImagePlus,
  LoaderCircle,
  Pencil,
  Plus,
  Search,
  Trash2,
  Upload,
  X
} from "lucide-react";
import type { AdminCollectionConfig, AdminField, CmsRecord } from "@/lib/cms/types";

type Props = {
  config: AdminCollectionConfig;
  initialRecords: CmsRecord[];
  storageMode: "postgres" | "local-json" | "readonly-seed";
};

function textValue(value: unknown) {
  if (Array.isArray(value)) return value.join("\n");
  if (value === null || value === undefined) return "";
  return String(value);
}

function recordTitle(record: CmsRecord, config: AdminCollectionConfig) {
  return textValue(record.data[config.titleField]) || record.slug || "未命名内容";
}

function recordSubtitle(record: CmsRecord) {
  const candidates = [record.data.category, record.data.pageKey, record.data.kind, record.data.platform, record.slug];
  return candidates.map(textValue).find(Boolean) || "-";
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function isPreviewableImage(value: string) {
  return value.startsWith("/") || value.startsWith("https://") || value.startsWith("http://");
}

export function AdminCollectionManager({ config, initialRecords, storageMode }: Props) {
  const [records, setRecords] = useState(initialRecords);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingRecord, setEditingRecord] = useState<CmsRecord | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [deletingRecord, setDeletingRecord] = useState<CmsRecord | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const visibleRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return records.filter((record) => {
      if (statusFilter !== "all" && record.status !== statusFilter) return false;
      if (!normalizedQuery) return true;
      return JSON.stringify(record).toLowerCase().includes(normalizedQuery);
    });
  }, [query, records, statusFilter]);

  function openEditor(record?: CmsRecord) {
    const values: Record<string, string> = {};
    for (const field of config.fields) {
      if (field.key === "status") values[field.key] = record?.status ?? "published";
      else if (field.key === "sortOrder") values[field.key] = String(record?.sortOrder ?? records.length);
      else values[field.key] = textValue(record?.data[field.key]);
    }
    setEditingRecord(record ?? null);
    setFormValues(values);
    setMessage(null);
    setFormOpen(true);
  }

  function closeEditor() {
    if (saving) return;
    setFormOpen(false);
    setEditingRecord(null);
    setFormValues({});
  }

  async function saveRecord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const endpoint = editingRecord
        ? `/api/admin/records/${config.collection}/${encodeURIComponent(editingRecord.id)}`
        : `/api/admin/records/${config.collection}`;
      const response = await fetch(endpoint, {
        method: editingRecord ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { ...(editingRecord?.data ?? {}), ...formValues } })
      });
      const result = (await response.json()) as { record?: CmsRecord; error?: string };
      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      if (!response.ok || !result.record) throw new Error(result.error || "保存失败。");

      setRecords((current) => {
        const exists = current.some((record) => record.id === result.record?.id);
        const next = exists
          ? current.map((record) => record.id === result.record?.id ? result.record as CmsRecord : record)
          : [...current, result.record as CmsRecord];
        return next.sort((left, right) => left.sortOrder - right.sortOrder);
      });
      setFormOpen(false);
      setEditingRecord(null);
      setMessage({ type: "success", text: `${config.singularLabel}已保存。` });
    } catch (error) {
      setMessage({ type: "error", text: (error as Error).message });
    } finally {
      setSaving(false);
    }
  }

  async function deleteRecord() {
    if (!deletingRecord) return;
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/admin/records/${config.collection}/${encodeURIComponent(deletingRecord.id)}`, { method: "DELETE" });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "删除失败。");
      setRecords((current) => current.filter((record) => record.id !== deletingRecord.id));
      setDeletingRecord(null);
      setMessage({ type: "success", text: `${config.singularLabel}已删除。` });
    } catch (error) {
      setMessage({ type: "error", text: (error as Error).message });
    } finally {
      setSaving(false);
    }
  }

  async function uploadImage(field: AdminField, file: File | undefined) {
    if (!file) return;
    setUploadingField(field.key);
    setMessage(null);

    try {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("/api/admin/upload", { method: "POST", body });
      const result = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error || "上传失败。");
      setFormValues((current) => ({ ...current, [field.key]: result.url as string }));
    } catch (error) {
      setMessage({ type: "error", text: (error as Error).message });
    } finally {
      setUploadingField(null);
    }
  }

  function renderField(field: AdminField) {
    const value = formValues[field.key] ?? "";
    const inputId = `admin-field-${field.key}`;
    const update = (nextValue: string) => setFormValues((current) => ({ ...current, [field.key]: nextValue }));
    const wide = field.type === "textarea" || field.type === "image";

    return (
      <div className={`admin-form-field ${wide ? "is-wide" : ""}`} key={field.key}>
        <label htmlFor={inputId}>{field.label}{field.required ? <span> *</span> : null}</label>
        {field.type === "textarea" ? (
          <textarea id={inputId} value={value} rows={field.rows ?? 5} required={field.required} placeholder={field.placeholder} onChange={(event) => update(event.target.value)} />
        ) : field.type === "select" ? (
          <select id={inputId} value={value} required={field.required} onChange={(event) => update(event.target.value)}>
            {(field.options ?? []).map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        ) : field.type === "image" ? (
          <div className="admin-image-field">
            <div className={`admin-image-preview ${isPreviewableImage(value) ? "has-image" : ""}`} style={isPreviewableImage(value) ? { backgroundImage: `url(${JSON.stringify(value).slice(1, -1)})` } : undefined}>
              {!isPreviewableImage(value) ? <><ImagePlus size={26} aria-hidden /><span>暂无图片</span></> : null}
            </div>
            <div>
              <input id={inputId} type="text" value={value} required={field.required} placeholder="图片 URL 或 /images 路径" onChange={(event) => update(event.target.value)} />
              <label className="admin-upload-button" htmlFor={`${inputId}-upload`}>
                {uploadingField === field.key ? <LoaderCircle className="admin-spin" size={17} aria-hidden /> : <Upload size={17} aria-hidden />}
                {uploadingField === field.key ? "正在上传" : "上传图片"}
              </label>
              <input
                className="admin-file-input"
                id={`${inputId}-upload`}
                type="file"
                accept="image/*"
                disabled={uploadingField === field.key}
                onChange={(event) => uploadImage(field, event.target.files?.[0])}
              />
            </div>
          </div>
        ) : (
          <input
            id={inputId}
            type={field.type === "number" ? "number" : field.type === "date" ? "date" : field.type === "url" ? "url" : "text"}
            value={value}
            required={field.required}
            placeholder={field.placeholder}
            onChange={(event) => update(event.target.value)}
          />
        )}
        {field.help ? <small>{field.help}</small> : null}
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <div><p>CONTENT MANAGEMENT</p><h1>{config.label}</h1><span>{config.description}</span></div>
        <button className="admin-primary-button" type="button" onClick={() => openEditor(config.singleton ? records[0] : undefined)}>
          {config.singleton && records[0] ? <Pencil size={17} aria-hidden /> : <Plus size={18} aria-hidden />}
          {config.singleton && records[0] ? "编辑设置" : `新增${config.singularLabel}`}
        </button>
      </div>

      {storageMode === "readonly-seed" ? <div className="admin-warning-banner"><AlertTriangle size={20} aria-hidden /><div><strong>当前为只读默认数据</strong><span>请在 Vercel 配置 DATABASE_URL 后再修改内容。</span></div></div> : null}
      {message ? <div className={`admin-message is-${message.type}`} role="status">{message.type === "success" ? <Check size={18} aria-hidden /> : <AlertTriangle size={18} aria-hidden />}{message.text}</div> : null}

      <div className="admin-table-toolbar">
        <label className="admin-search-field">
          <Search size={18} aria-hidden />
          <input type="search" value={query} placeholder={`搜索${config.label}`} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <select aria-label="筛选发布状态" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option value="all">全部状态</option>
          <option value="published">已发布</option>
          <option value="draft">草稿</option>
        </select>
        <span>共 {visibleRecords.length} 条</span>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th>内容</th><th>分类 / 标识</th><th>状态</th><th>排序</th><th>更新时间</th><th><span className="sr-only">操作</span></th></tr></thead>
          <tbody>
            {visibleRecords.map((record) => (
              <tr key={record.id}>
                <td><strong>{recordTitle(record, config)}</strong><small>{record.slug ?? record.id}</small></td>
                <td>{recordSubtitle(record)}</td>
                <td><span className={`admin-status-badge is-${record.status}`}>{record.status === "published" ? "已发布" : "草稿"}</span></td>
                <td>{record.sortOrder}</td>
                <td>{formatDate(record.updatedAt)}</td>
                <td><div className="admin-row-actions"><button type="button" title="编辑" aria-label={`编辑 ${recordTitle(record, config)}`} onClick={() => openEditor(record)}><Pencil size={17} aria-hidden /></button><button className="is-danger" type="button" title="删除" aria-label={`删除 ${recordTitle(record, config)}`} onClick={() => setDeletingRecord(record)}><Trash2 size={17} aria-hidden /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleRecords.length === 0 ? <div className="admin-empty-state"><Search size={24} aria-hidden /><strong>没有找到内容</strong><span>调整搜索条件或新增一条内容。</span></div> : null}
      </div>

      {formOpen ? (
        <div className="admin-modal-backdrop" role="presentation">
          <section className="admin-editor-modal" role="dialog" aria-modal="true" aria-labelledby="admin-editor-title">
            <header><div><p>{editingRecord ? "EDIT CONTENT" : "CREATE CONTENT"}</p><h2 id="admin-editor-title">{editingRecord ? `编辑${config.singularLabel}` : `新增${config.singularLabel}`}</h2></div><button type="button" aria-label="关闭编辑器" onClick={closeEditor}><X size={21} aria-hidden /></button></header>
            <form onSubmit={saveRecord}>
              <div className="admin-form-grid">{config.fields.map(renderField)}</div>
              <footer><button className="admin-secondary-button" type="button" onClick={closeEditor}>取消</button><button className="admin-primary-button" type="submit" disabled={saving || Boolean(uploadingField)}>{saving ? <LoaderCircle className="admin-spin" size={18} aria-hidden /> : <Check size={18} aria-hidden />}{saving ? "正在保存" : "保存内容"}</button></footer>
            </form>
          </section>
        </div>
      ) : null}

      {deletingRecord ? (
        <div className="admin-modal-backdrop" role="presentation">
          <section className="admin-confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="admin-delete-title">
            <span><AlertTriangle size={26} aria-hidden /></span>
            <h2 id="admin-delete-title">确认删除{config.singularLabel}？</h2>
            <p>“{recordTitle(deletingRecord, config)}”删除后不会在前台显示，此操作无法自动恢复。</p>
            <div><button className="admin-secondary-button" type="button" onClick={() => setDeletingRecord(null)}>取消</button><button className="admin-danger-button" type="button" disabled={saving} onClick={deleteRecord}>{saving ? <LoaderCircle className="admin-spin" size={18} aria-hidden /> : <Trash2 size={18} aria-hidden />}确认删除</button></div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
