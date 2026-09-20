import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Courses from "@/components/home/Courses";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import LearningExperience from "@/components/home/LearningExperience";
import Stat from "@/components/home/Stat";
import Success from "@/components/home/Success";
import Teachers from "@/components/home/Teachers";
import Testimonials from "@/components/home/Testimonials";
import Why from "@/components/home/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Stat />
      <About />
      <Courses />
      <Why />
      <Success />
      <Teachers />
      <LearningExperience />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
}
