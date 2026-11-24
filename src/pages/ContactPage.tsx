import { FormEvent, useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactPage() {
  const [form, setForm] = useState<ContactState>({
    name: '',
    email: '',
    subject: 'Private Dining Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): ContactErrors => {
    const next: ContactErrors = {};
    if (form.name.trim().length < 2) {
      next.name = 'Please enter your name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please provide a valid email address.';
    }
    if (!form.subject.trim()) {
      next.subject = 'Please select or enter a subject.';
    }
    if (form.message.trim().length < 10) {
      next.message = 'Please write a brief message (at least 10 characters).';
    }
    return next;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="border-b border-[#E4DCCE] bg-[#F2ECE2] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            Concierge &amp; Directions
          </p>
          <h1 className="mt-3 font-serif text-5xl font-normal tracking-tight text-[#1B1817] sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#5C534E]">
            All contact details, hours, and location coordinates presented on this page are fictional examples crafted for this SA Crown Web Design portfolio showcase.
          </p>
        </div>
      </section>

      {/* Details + Form */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Fictional Details Column */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="font-serif text-3xl font-normal text-[#1B1817]">
                Illustrative Restaurant Details
              </h2>
              <p className="mt-2 text-xs text-[#9A7735]">
                {RESTAURANT_INFO.fictionalAddressNote}
              </p>
            </div>

            <div className="space-y-6 border-t border-[#E4DCCE] pt-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#4A131E]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A7735]">
                    Example Address
                  </p>
                  <p className="mt-1 leading-relaxed text-[#1B1817]">
                    {RESTAURANT_INFO.fictionalAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#4A131E]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A7735]">
                    Example Concierge Line
                  </p>
                  <p className="mt-1 text-[#1B1817] tabular-nums">
                    {RESTAURANT_INFO.fictionalPhone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#4A131E]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A7735]">
                    Example Email
                  </p>
                  <p className="mt-1 text-[#1B1817]">{RESTAURANT_INFO.fictionalEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#4A131E]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A7735]">
                    Opening Hours
                  </p>
                  <dl className="mt-2 space-y-2">
                    {RESTAURANT_INFO.hours.map((row) => (
                      <div key={row.days}>
                        <dt className="font-medium text-[#1B1817]">{row.days}</dt>
                        <dd className="text-[#5C534E] tabular-nums">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="border border-[#E4DCCE] bg-[#FAF7F2] p-8 md:p-10">
              <h2 className="font-serif text-3xl font-normal text-[#1B1817]">
                Send an Inquiry
              </h2>
              <p className="mt-2 text-sm text-[#5C534E]">
                For private dining demonstrations, tasting menu questions, or press inquiries.
              </p>

              {submitted ? (
                <div role="status" aria-live="polite" className="mt-8 border border-[#4A131E]/25 bg-[#F2ECE2] p-6">
                  <div className="flex items-center gap-2.5 text-[#4A131E]">
                    <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                      Demo Inquiry Validated
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#1B1817]">
                    Thank you, {form.name}. Your message has passed client-side validation in this demonstration interface. No external email was sent.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        subject: 'Private Dining Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-5 min-h-[40px] cursor-pointer border border-[#1B1817] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817] transition-colors hover:bg-[#1B1817] hover:text-[#FAF7F2]"
                  >
                    Send Another Demo Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                      >
                        Your Name <span className="text-[#4A131E]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Siddharth Kapoor"
                        aria-invalid={Boolean(errors.name)}
                        className={`mt-2 w-full border bg-white/70 px-4 py-3 text-sm text-[#1B1817] focus:outline-none ${
                          errors.name ? 'border-[#8B1E2B]' : 'border-[#D8CEBE] focus:border-[#4A131E]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#8B1E2B]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                      >
                        Email Address <span className="text-[#4A131E]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="name@example.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`mt-2 w-full border bg-white/70 px-4 py-3 text-sm text-[#1B1817] focus:outline-none ${
                          errors.email ? 'border-[#8B1E2B]' : 'border-[#D8CEBE] focus:border-[#4A131E]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#8B1E2B]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Inquiry Topic <span className="text-[#4A131E]">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="mt-2 w-full border border-[#D8CEBE] bg-white/70 px-4 py-3 text-sm text-[#1B1817] focus:border-[#4A131E] focus:outline-none"
                    >
                      <option value="Private Dining Inquiry">Private Dining Inquiry</option>
                      <option value="Dietary & Tasting Menu Question">Dietary &amp; Tasting Menu Question</option>
                      <option value="Sommelier & Cellar Request">Sommelier &amp; Cellar Request</option>
                      <option value="Website Concept Feedback">Website Concept Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Message <span className="text-[#4A131E]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share details of your inquiry or preferred evening..."
                      aria-invalid={Boolean(errors.message)}
                      className={`mt-2 w-full border bg-white/70 px-4 py-3 text-sm text-[#1B1817] focus:outline-none ${
                        errors.message ? 'border-[#8B1E2B]' : 'border-[#D8CEBE] focus:border-[#4A131E]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#8B1E2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="min-h-[46px] cursor-pointer bg-[#4A131E] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] transition-colors hover:bg-[#651D2B]"
                  >
                    Submit Demo Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Architectural Map Placeholder */}
        <div className="mt-16 border border-[#E4DCCE] bg-[#F2ECE2]">
          <div className="flex flex-col justify-between gap-2 border-b border-[#E4DCCE] px-6 py-4 sm:flex-row sm:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A7735]">
              District Map Placeholder · Fictional Location
            </p>
            <p className="text-xs text-[#5C534E]">
              Valet Arrival at Rosewood Crescent Courtyard
            </p>
          </div>

          <div
            role="img"
            aria-label="Stylized architectural map placeholder for fictional address 14 Lavelle Crescent, Rosewood Quarter"
            className="relative h-[320px] w-full overflow-hidden bg-[#1B1817]"
          >
            {/* Architectural Street Grid SVG */}
            <svg
              viewBox="0 0 1200 360"
              className="h-full w-full opacity-55"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect width="1200" height="360" fill="#1B1817" />
              {/* City Blocks */}
              <g stroke="#C5A059" strokeOpacity="0.22" strokeWidth="1">
                <line x1="0" y1="90" x2="1200" y2="90" />
                <line x1="0" y1="185" x2="1200" y2="185" />
                <line x1="0" y1="280" x2="1200" y2="280" />
                <line x1="210" y1="0" x2="210" y2="360" />
                <line x1="460" y1="0" x2="460" y2="360" />
                <line x1="740" y1="0" x2="740" y2="360" />
                <line x1="980" y1="0" x2="980" y2="360" />
              </g>
              {/* Crescent Avenue */}
              <path
                d="M 120 340 Q 600 130 1090 220"
                fill="none"
                stroke="#C5A059"
                strokeWidth="2.5"
                strokeOpacity="0.55"
              />
              {/* Park Courtyard */}
              <rect
                x="485"
                y="108"
                width="230"
                height="62"
                fill="#4A131E"
                fillOpacity="0.35"
                stroke="#C5A059"
                strokeOpacity="0.4"
              />
            </svg>

            {/* Centered Location Marker Card */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="max-w-sm border border-[#C5A059]/60 bg-[#1B1817]/95 px-6 py-5 text-center text-[#FAF7F2] shadow-lg">
                <div className="mx-auto flex h-9 w-9 items-center justify-center border border-[#C5A059] bg-[#4A131E] text-[#FAF7F2]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-3 font-serif text-2xl text-[#FAF7F2]">
                  {RESTAURANT_INFO.name}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#FAF7F2]/75">
                  {RESTAURANT_INFO.fictionalAddress}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[#C5A059]">
                  Map Placeholder · Demo Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
