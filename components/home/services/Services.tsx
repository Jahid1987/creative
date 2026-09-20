import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeader from "../../utils/SectionHeader";

type Service = {
  title: string;
  badge?: string;
  image: string;
  features: string[];
};

const services: Service[] = [
  {
    title: "Class 9-10 & SSC Preparation Batch",
    badge: "Popular",
    image: "/hero.jpeg",
    features: [
      "1:12 Classroom",
      "Monthly Test",
      "Online Gamified Quiz",
      "Multimedia Class",
    ],
  },
  {
    title: "Class 11-12 & HSC Preparation",
    badge: "Advanced",
    image: "/hero.jpeg",
    features: [
      "1:12 Classroom",
      "Board Model Test",
      "Concept Clearing Sessions",
      "Multimedia Class",
    ],
  },
  {
    title: "Class 3 to 8 & Scholarship Preparation",
    badge: "Foundation",
    image: "/hero.jpeg",
    features: [
      "1:12 Classroom",
      "Base Building Care",
      "Weekly Assessment",
      "Online Gamified Quiz",
    ],
  },
  {
    title: "Hatekhori & School Admission Preparation",
    badge: "Kids Care",
    image: "/hero.jpeg",
    features: [
      "Special Personal Care",
      "Activity-Based Learning",
      "Phonics & Basic Math",
      "Parent-Teacher Meeting",
    ],
  },
  {
    title: "Spoken English & Programming",
    badge: "Skill Dev",
    image: "/hero.jpeg",
    features: [
      "Interactive Speaking Practice",
      "Hands-on Coding Lab",
      "Project-Based Learning",
      "Certificate of Completion",
    ],
  },
];

export default function Services() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Our Services"
          subtitle="We offer a range of services to help you achieve your goals."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle>{service.title}</CardTitle>
                  <span className="shrink-0 rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                    {service.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
