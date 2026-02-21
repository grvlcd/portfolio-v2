import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import WorkSection from "./components/WorkSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-hidden">
      <HeroSection />
      <ExperienceSection />
      <WorkSection />
      <FooterSection />
    </main>
  );
}
