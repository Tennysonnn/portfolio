import Hero from "@/components/Hero";
import AISearch from "@/components/AISearch";
import SelectedProjects from "@/components/SelectedProjects";
import ExperiencePreview from "@/components/ExperiencePreview";
import AboutPreview from "@/components/AboutPreview";
import ContactCTA from "@/components/ContactCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <AISearch />
      </ScrollReveal>
      <ScrollReveal>
        <SelectedProjects />
      </ScrollReveal>
      <ScrollReveal>
        <ExperiencePreview />
      </ScrollReveal>
      <ScrollReveal>
        <AboutPreview />
      </ScrollReveal>
      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>
    </>
  );
}
