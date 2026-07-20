"use client";

import { useState, useRef, type FormEvent } from "react";
import { User, Mail, Phone, Send, MapPin, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "918084872966";

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: "work.zikrullah@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 80848 72966" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const whatsappText = `🚀 New Website Inquiry

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

💬 Message:
${message}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappText
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setLoading(false);
    setSent(true);
    formRef.current?.reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f2] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#6c4fd6]">
            Contact
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#0a0e17] md:text-5xl">
            Let&apos;s build something worth shipping.
          </h1>
          <p className="mt-4 text-base text-[#5b5f6b]">
            Tell us what you&apos;re building — we&apos;ll reply on WhatsApp,
            usually within a few hours.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_-15px_rgba(10,14,23,0.15)] md:grid-cols-5">
          {/* LEFT SIDE */}
          <div className="relative overflow-hidden bg-[#0a0e17] p-10 text-white md:col-span-2">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#6c4fd6] opacity-25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -left-8 h-56 w-56 rounded-full bg-[#6c4fd6] opacity-10 blur-3xl"
            />

            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Share a few details about your project and we&apos;ll follow up
              directly — no forms disappearing into a void.
            </p>

            <div className="mt-12 space-y-6">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      {label}
                    </p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="p-10 md:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              <Field
                icon={User}
                label="Full name"
                name="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
              />
              <Field
                icon={Mail}
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <Field
                icon={Phone}
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
              />

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#0a0e17]"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-[#e3e3df] p-4 text-[#0a0e17] placeholder:text-[#a3a6ad] outline-none transition focus:border-[#6c4fd6] focus:ring-2 focus:ring-[#6c4fd6]/15"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a0e17] py-3.5 font-semibold text-white transition hover:bg-[#6c4fd6] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  "Opening WhatsApp…"
                ) : (
                  <>
                    Send WhatsApp message
                    <Send size={18} />
                  </>
                )}
              </button>

              <p
                role="status"
                className={`flex items-center justify-center gap-2 text-sm text-[#1f9d55] transition-opacity ${
                  sent ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <CheckCircle2 size={16} />
                WhatsApp opened in a new tab
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({
  icon: Icon,
  label,
  name,
  type,
  placeholder,
  autoComplete,
}: {
  icon: typeof User;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-[#0a0e17]">
        {label}
      </label>
      <div className="relative">
        <Icon
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a3a6ad]"
          size={18}
        />
        <input
          id={name}
          required
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full rounded-xl border border-[#e3e3df] py-3 pl-11 pr-4 text-[#0a0e17] placeholder:text-[#a3a6ad] outline-none transition focus:border-[#6c4fd6] focus:ring-2 focus:ring-[#6c4fd6]/15"
        />
      </div>
    </div>
  );
}