import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0e5278]">
      <Image
        src="/hero.jpeg"
        alt="Creative Care Coaching students learning together"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#08466b]/80" />
      <div className="absolute inset-0 bg-linear-to-r from-[#073e62]/95 via-[#0c5b80]/80 to-[#0c5b80]/25" />

      <div className="relative z-10 mx-auto flex min-h-120 max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-140 lg:px-10">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9ee5bd] sm:text-sm">
            Creative Care Coaching
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Build Strong Foundations.
            <span className="block text-[#b9efc9]">Achieve Bigger Goals.</span>
          </h1>

          {/* <p className="mt-5 max-w-lg text-sm leading-7 text-blue-50 sm:text-base">
            Bangladesh&apos;s leading educational coaching center helping
            students grow with confidence, discipline, and the skills they need
            to succeed.
          </p> */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-11 rounded-md bg-[#f6a23a] px-6 font-semibold text-white shadow-sm hover:bg-[#e89025]">
              <Link href="/contact">Contact Now</Link>
            </Button>

            <Button
              variant="outline"
              className="h-11 rounded-md border-white/70 bg-white/10 px-6 font-semibold text-white hover:bg-white hover:text-[#145b86]"
            >
              <Link href="/courses">
                Explore Courses
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
