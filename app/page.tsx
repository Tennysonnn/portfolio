import Hero from "@/components/Hero";
import AISearch from "@/components/AISearch";
import SelectedProjects from "@/components/SelectedProjects";
import ExperiencePreview from "@/components/ExperiencePreview";
import AboutPreview from "@/components/AboutPreview";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AISearch />
      <SelectedProjects />
      <ExperiencePreview />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
