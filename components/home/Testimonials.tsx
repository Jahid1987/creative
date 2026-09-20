import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The teachers explain every topic clearly and always encourage us to do better.",
    name: "Sabila Rahman",
    role: "SSC Student",
    initials: "SR",
    color: "bg-[#e8f3fb] text-[#145b86]",
  },
  {
    quote:
      "Creative Care Coaching helped me become more confident and prepared for my exams.",
    name: "Tanvir Hasan",
    role: "HSC Student",
    initials: "TH",
    color: "bg-[#e9f8ef] text-[#168354]",
  },
  {
    quote:
      "The learning environment is friendly, focused, and genuinely supportive.",
    name: "Mim Akter",
    role: "Student",
    initials: "MA",
    color: "bg-[#fff1e2] text-[#e89025]",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
              Testimonials
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              What Our Students Say
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Hear from students who are growing, learning, and achieving their
              goals with Creative Care Coaching.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#145b86] transition-colors hover:bg-[#e8f3fb]"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Next testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#145b86] transition-colors hover:bg-[#e8f3fb]"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <article
              key={name}
              className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-[#dcecf6]"
                aria-hidden="true"
              />

              <div className="flex gap-1 text-[#f2a52d]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-6 min-h-24 text-sm leading-6 text-slate-600">
                &quot;{quote}&quot;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${color}`}
                >
                  {initials}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">{name}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
