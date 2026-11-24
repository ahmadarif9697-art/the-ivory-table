import { FormEvent, useState } from 'react';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const SEATING_TIMES = ['18:30', '19:15', '20:00', '20:45', '21:30'];
const GUEST_OPTIONS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests', '7 Guests', '8 Guests (Private Salon)'];

function getDefaultDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

export function ReservationsPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    date: getDefaultDate(),
    time: '19:15',
    guests: '2 Guests',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedDemo, setSubmittedDemo] = useState<{
    reference: string;
    data: FormState;
  } | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) {
      next.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) {
      next.phone = 'Please enter a valid 10 to 15 digit phone number.';
    }
    if (!form.date) {
      next.date = 'Please select a preferred evening date.';
    } else {
      const todayStr = new Date().toISOString().split('T')[0];
      if (form.date < todayStr) {
        next.date = 'Please choose today or an upcoming date.';
      }
    }
    if (!form.time) {
      next.time = 'Please choose a seating time.';
    }
    if (!form.guests) {
      next.guests = 'Please specify the number of guests.';
    }
    return next;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const demoCode = `DEMO-IVR-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedDemo({
      reference: demoCode,
      data: { ...form },
    });
  };

  const resetForm = () => {
    setSubmittedDemo(null);
    setErrors({});
    setForm({
      name: '',
      email: '',
      phone: '',
      date: getDefaultDate(),
      time: '19:15',
      guests: '2 Guests',
      notes: '',
    });
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="border-b border-[#E4DCCE] bg-[#F2ECE2] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7735]">
            Evening Reservations
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-5xl font-normal tracking-tight text-[#1B1817] sm:text-6xl">
            Request a Table
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#5C534E]">
            Preview the reservation experience for {RESTAURANT_INFO.name}. Seating is hosted in intimate evening intervals across our 42-seat dining salon.
          </p>
        </div>
      </section>

      {/* Main Split Content */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            {/* Explicit Demo Notice */}
            <div
              role="note"
              className="mb-8 flex items-start gap-3 border border-[#C5A059]/60 bg-[#F2ECE2] p-4 text-sm text-[#1B1817]"
            >
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#9A7735]" aria-hidden="true" />
              <div>
                <p className="font-semibold text-[#1B1817]">Portfolio Demo Interface Only</p>
                <p className="mt-1 text-xs leading-relaxed text-[#5C534E]">
                  This reservation form validates your input locally to demonstrate luxury hospitality UX. No real table booking is created or transmitted to an external booking engine.
                </p>
              </div>
            </div>

            {submittedDemo ? (
              <div
                role="status"
                aria-live="polite"
                className="border border-[#4A131E]/25 bg-[#FAF7F2] p-8 md:p-10"
              >
                <div className="flex items-center gap-3 text-[#4A131E]">
                  <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Demo Request Validated
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-3xl font-normal text-[#1B1817] sm:text-4xl">
                  Thank you, {submittedDemo.data.name}.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5C534E]">
                  Your sample reservation summary has been generated below for demonstration purposes. As this is a fictional concept showcase by SA Crown Web Design, no actual restaurant booking has been placed.
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-6 border-y border-[#E4DCCE] py-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-[#9A7735]">
                      Demo Reference
                    </dt>
                    <dd className="mt-1 font-sans text-sm font-semibold text-[#1B1817] tabular-nums">
                      {submittedDemo.reference}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-[#9A7735]">
                      Party Size
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[#1B1817]">
                      {submittedDemo.data.guests}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-[#9A7735]">
                      Date &amp; Seating
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[#1B1817] tabular-nums">
                      {submittedDemo.data.date} · {submittedDemo.data.time}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-[#9A7735]">
                      Contact Email
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[#1B1817]">
                      {submittedDemo.data.email}
                    </dd>
                  </div>
                  {submittedDemo.data.notes.trim() && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs uppercase tracking-[0.14em] text-[#9A7735]">
                        Dietary / Occasion Notes
                      </dt>
                      <dd className="mt-1 text-sm text-[#5C534E]">
                        {submittedDemo.data.notes}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setSubmittedDemo(null)}
                    className="min-h-[44px] cursor-pointer border border-[#1B1817] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817] transition-colors hover:bg-[#1B1817] hover:text-[#FAF7F2]"
                  >
                    Modify Details
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="min-h-[44px] cursor-pointer bg-[#4A131E] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF7F2] transition-colors hover:bg-[#651D2B]"
                  >
                    Start New Demo Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Full Name <span className="text-[#4A131E]">*</span>
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Ananya Rao"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'res-name-err' : undefined}
                      className={`mt-2 w-full border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1817] placeholder-[#5C534E]/50 focus:outline-none ${
                        errors.name
                          ? 'border-[#8B1E2B]'
                          : 'border-[#D8CEBE] focus:border-[#4A131E]'
                      }`}
                    />
                    {errors.name && (
                      <p id="res-name-err" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#8B1E2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="res-email"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Email Address <span className="text-[#4A131E]">*</span>
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="guest@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'res-email-err' : undefined}
                      className={`mt-2 w-full border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1817] placeholder-[#5C534E]/50 focus:outline-none ${
                        errors.email
                          ? 'border-[#8B1E2B]'
                          : 'border-[#D8CEBE] focus:border-[#4A131E]'
                      }`}
                    />
                    {errors.email && (
                      <p id="res-email-err" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#8B1E2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Phone Number <span className="text-[#4A131E]">*</span>
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+91 98000 00000"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'res-phone-err' : undefined}
                      className={`mt-2 w-full border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1817] placeholder-[#5C534E]/50 tabular-nums focus:outline-none ${
                        errors.phone
                          ? 'border-[#8B1E2B]'
                          : 'border-[#D8CEBE] focus:border-[#4A131E]'
                      }`}
                    />
                    {errors.phone && (
                      <p id="res-phone-err" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#8B1E2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Guests */}
                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Number of Guests <span className="text-[#4A131E]">*</span>
                    </label>
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="mt-2 w-full border border-[#D8CEBE] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1817] focus:border-[#4A131E] focus:outline-none"
                    >
                      {GUEST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Preferred Date <span className="text-[#4A131E]">*</span>
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={form.date}
                      onChange={(e) => {
                        setForm({ ...form, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: undefined });
                      }}
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={errors.date ? 'res-date-err' : undefined}
                      className={`mt-2 w-full border bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1817] tabular-nums focus:outline-none ${
                        errors.date
                          ? 'border-[#8B1E2B]'
                          : 'border-[#D8CEBE] focus:border-[#4A131E]'
                      }`}
                    />
                    {errors.date && (
                      <p id="res-date-err" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#8B1E2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                    >
                      Seating Time <span className="text-[#4A131E]">*</span>
                    </label>
                    <select
                      id="res-time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="mt-2 w-full border border-[#D8CEBE] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1817] tabular-nums focus:border-[#4A131E] focus:outline-none"
                    >
                      {SEATING_TIMES.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot} hrs
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="res-notes"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1B1817]"
                  >
                    Dietary Preferences or Occasion Notes
                  </label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Allergies, vegetarian tasting request, or anniversary note (optional)"
                    className="mt-2 w-full border border-[#D8CEBE] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1817] placeholder-[#5C534E]/50 focus:border-[#4A131E] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="min-h-[46px] w-full cursor-pointer bg-[#4A131E] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] transition-colors hover:bg-[#651D2B] sm:w-auto"
                  >
                    Preview Reservation Confirmation
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Side Atmosphere & Policy Column */}
          <aside className="space-y-8 lg:col-span-5">
            <div className="border border-[#E4DCCE]">
              <EditorialImage
                src={IMAGES.atmosphereBar}
                alt="Evening cocktail bar and dining alcove at The Ivory Table"
                aspectClass="aspect-[16/10]"
              />
            </div>

            <div className="border border-[#E4DCCE] bg-[#F2ECE2] p-8">
              <h2 className="font-serif text-2xl font-medium text-[#1B1817]">
                Dining Salon Notes
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A7735]">
                    Dress Attire
                  </dt>
                  <dd className="mt-1 text-[#5C534E]">
                    Smart evening elegance. Tailored jackets or formal attire appreciated.
                  </dd>
                </div>
                <div className="border-t border-[#E4DCCE] pt-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A7735]">
                    Tasting Pacing
                  </dt>
                  <dd className="mt-1 text-[#5C534E]">
                    Please allow 2 hours for à la carte dining and 2.5 hours for the Seven-Course Tasting Journey.
                  </dd>
                </div>
                <div className="border-t border-[#E4DCCE] pt-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A7735]">
                    Private Dining Salon
                  </dt>
                  <dd className="mt-1 text-[#5C534E]">
                    Groups of 8 to 14 guests may be hosted in our wine vault alcove by arrangement.
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
