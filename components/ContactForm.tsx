"use client";

import { useState } from "react";
import { Send, Upload } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="inquiry-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <label>
          <span>Full name</span>
          <input name="name" required placeholder="John Smith" autoComplete="name" />
        </label>
        <label>
          <span>Company / Entity</span>
          <input name="company" required placeholder="Organization name" autoComplete="organization" />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" required type="email" placeholder="name@company.com" autoComplete="email" />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input name="phone" required type="tel" placeholder="+1 (000) 000-0000" autoComplete="tel" />
        </label>
      </div>

      <label>
        <span>Equipment interested in</span>
        <select name="equipment" defaultValue="">
          <option value="" disabled>
            Select equipment category
          </option>
          <option>Sand Making System</option>
          <option>Crushing Plant</option>
          <option>Mineral Processing Line</option>
          <option>Grinding & Milling System</option>
          <option>Washing and Recovery Line</option>
        </select>
      </label>

      <label>
        <span>Project requirements / specifications</span>
        <textarea
          name="requirements"
          rows={6}
          placeholder="Material, target capacity, finished size, project location, and site conditions..."
        />
      </label>

      <label className="upload-zone">
        <Upload size={28} aria-hidden />
        <span>Upload site plans / specs</span>
        <small>PDF, JPG, PNG, CAD (max 25MB)</small>
        <input name="attachment" type="file" />
      </label>

      <button className="button button-primary form-submit" type="submit">
        Submit Inquiry <Send size={18} aria-hidden />
      </button>

      <p className="form-status" aria-live="polite">
        {submitted
          ? "Thanks. This prototype captured the request locally; connect the form endpoint when the CRM is ready."
          : "Our engineering team typically reviews project details before recommending equipment."}
      </p>
    </form>
  );
}
