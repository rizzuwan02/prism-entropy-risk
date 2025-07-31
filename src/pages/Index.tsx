import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ArchitectureSection } from '@/components/ArchitectureSection';
import { DemoSection } from '@/components/DemoSection';
import { TeamSection } from '@/components/TeamSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ArchitectureSection />
      <DemoSection />
      <TeamSection />
    </div>
  );
};

export default Index;
