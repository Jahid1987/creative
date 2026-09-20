import {
  BookOpenCheck,
  GraduationCap,
  Lightbulb,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    title: "Modern Teachers",
    description:
      "Learn from experienced teachers who make every lesson clear, practical, and engaging.",
    icon: UsersRound,
    iconClass: "bg-[#e8f3fb] text-[#145b86]",
  },
  {
    title: "Inspiring Exams",
    description:
      "Build confidence through regular practice, helpful feedback, and meaningful progress.",
    icon: BookOpenCheck,
    iconClass: "bg-[#e9f8ef] text-[#20a56b]",
  },
  {
    title: "Concise Resources",
    description:
      "Get focused study materials that make revision easier and help you learn faster.",
    icon: Lightbulb,
    iconClass: "bg-[#fff1e2] text-[#e89025]",
  },
  {
    title: "Resourced Stories",
    description:
      "Stay motivated through real student journeys, achievements, and success stories.",
    icon: GraduationCap,
    iconClass: "bg-[#e9f1fb] text-[#3c78b4]",
  },
];

export default function Why() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Why Students Choose CCC
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            We create a supportive learning experience that helps every student
            grow with confidence and achieve better results.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, description, icon: Icon, iconClass }) => (
            <div
              key={title}
              className="flex min-h-64 flex-col items-center rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconClass}`}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-base font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
