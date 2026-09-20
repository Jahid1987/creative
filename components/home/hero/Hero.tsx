import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative isolate min-h-130 overflow-hidden">
      <Image
        src="/hero.jpeg"
        alt="Hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="relative z-10 flex min-h-130 items-center px-6 py-16">
        <div className="max-w-xl space-y-5">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Build something remarkable
          </h1>
          <p className="text-lg">Let&apos;s bring your next idea to life.</p>
          <Button>Contact Now</Button>
        </div>
      </div>
    </section>
  );
}
