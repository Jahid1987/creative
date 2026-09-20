import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Class 6 to HSC",
    description:
      "Build a strong academic foundation with structured lessons and regular guidance.",
    image: "/hero.jpeg",
    tags: ["School", "SSC", "HSC"],
  },
  {
    title: "Academic Excellence",
    description:
      "Improve subject understanding, confidence, and preparation for important exams.",
    image: "/hero.jpeg",
    tags: ["English", "Math", "Science"],
  },
  {
    title: "Admission Preparation",
    description:
      "Get focused support and practical strategies for competitive admission tests.",
    image: "/hero.jpeg",
    tags: ["Admission", "Mentoring"],
  },
];

export default function Courses() {
  return (
    <section className="bg-[#f5faff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
              Our Programs
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Our Courses
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Carefully designed courses to help students learn with confidence
              and reach their academic goals.
            </p>
          </div>

          <Button
            variant="outline"
            className="w-fit border-[#145b86] text-[#145b86] hover:bg-[#145b86] hover:text-white"
          >
            <Link href="/courses">
              View All Courses
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-[#e8f3fb] px-2 py-1 text-[10px] font-semibold text-[#145b86]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {course.description}
                </p>

                <Button
                  
                  className="mt-5 h-10 w-full rounded-md bg-[#145b86] font-semibold text-white hover:bg-[#0f4668]"
                >
                  <Link href="/contact">Contact Now</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
