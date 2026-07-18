import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { DemoSection } from './components/sections/DemoSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { ScreenshotsSection } from './components/sections/ScreenshotsSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';

export default function SideGPTWebsite() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <ArchitectureSection />
        <ComparisonSection />
        <ScreenshotsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}