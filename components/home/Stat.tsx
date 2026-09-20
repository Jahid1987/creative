import { Award, BookOpen, CheckCircle2, Users } from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Years Teaching",
    icon: BookOpen,
  },
  {
    value: "140+",
    label: "Students",
    icon: Users,
  },
  {
    value: "90%+",
    label: "Satisfaction Rate",
    icon: CheckCircle2,
  },
  {
    value: "100+",
    label: "Admission Stories",
    icon: Award,
  },
];

export default function Stat() {
  return (
    <section className="relative z-10 -mt-8 px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-4 text-center shadow-md transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f3fb] text-[#145b86]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>

            <strong className="text-lg font-bold leading-none text-[#145b86] sm:text-xl">
              {value}
            </strong>

            <span className="mt-1 text-[11px] font-medium text-slate-600 sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
