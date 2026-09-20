import { CheckCircle2, Star } from "lucide-react";

const successStories = [
  {
    name: "Nusrat Jahan",
    result: "Achieved A+ in SSC",
    subject: "Science Group",
    initials: "NJ",
    color: "bg-[#e8f3fb] text-[#145b86]",
  },
  {
    name: "Fahim Ahmed",
    result: "Scored 90%+ in HSC",
    subject: "Business Studies",
    initials: "FA",
    color: "bg-[#e9f8ef] text-[#168354]",
  },
  {
    name: "Sadia Rahman",
    result: "Selected for University",
    subject: "Admission Success",
    initials: "SR",
    color: "bg-[#fff1e2] text-[#e89025]",
  },
];

export default function Success() {
  return (
    <section className="bg-[#f5faff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
            Student Success
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Results That Inspire Us
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Our students&apos; dedication and achievements motivate us to keep
            creating better learning experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {successStories.map(({ name, result, subject, initials, color }) => (
            <article
              key={name}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${color}`}
                >
                  {initials}
                </div>

                <div className="flex items-center gap-1 text-[#f2a52d]">
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900">{name}</h3>
                  <CheckCircle2
                    className="h-4 w-4 text-[#20a56b]"
                    aria-label="Verified result"
                  />
                </div>

                <p className="mt-2 text-lg font-bold text-[#145b86]">
                  {result}
                </p>

                <p className="mt-1 text-sm text-slate-500">{subject}</p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm italic leading-6 text-slate-600">
                  &quot;Creative Care Coaching helped me stay focused and
                  confident throughout my preparation.&quot;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
