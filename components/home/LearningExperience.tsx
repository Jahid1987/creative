import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MonitorPlay, UsersRound } from "lucide-react";

const experiences = [
  {
    title: "Classroom Experience",
    description:
      "Learn together in a focused and supportive classroom environment.",
    icon: UsersRound,
    imagePosition: "object-left",
  },
  {
    title: "Digital Learning",
    description: "Access helpful resources and guidance beyond the classroom.",
    icon: MonitorPlay,
    imagePosition: "object-right",
  },
];

export default function LearningExperience() {
  return (
    <section className="bg-[#f5faff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
            Learning Experience
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Learning That Makes a Difference
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            We combine engaging classroom learning with practical digital
            support to help students learn confidently.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {experiences.map(
            ({ title, description, icon: Icon, imagePosition }) => (
              <article
                key={title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-16/8 overflow-hidden">
                  <Image
                    src="/hero.jpeg"
                    alt={title}
                    fill
                    className={`object-cover transition-transform duration-300 hover:scale-105 ${imagePosition}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#145b86]/20" />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f3fb] text-[#145b86]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>

                      <Link
                        href="/courses"
                        className="mt-4 inline-flex items-center text-sm font-semibold text-[#145b86] hover:text-[#0f4668]"
                      >
                        Explore More
                        <ArrowRight
                          className="ml-2 h-4 w-4"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
