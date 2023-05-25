import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <div className="py-11 px-6">
      <HeroSection />
      <hr />
      <SkillsSection />
      <hr />
      <ProjectsSection />
      <hr />
    </div>
  );
}
