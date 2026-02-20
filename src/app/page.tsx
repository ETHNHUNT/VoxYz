import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AgentLiveWidget } from '@/components/home/AgentLiveWidget';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DemandRadarPreview } from '@/components/home/DemandRadarPreview';
import { ProductGrid } from '@/components/home/ProductGrid';
import { ShipFasterEngine } from '@/components/home/ShipFasterEngine';
import { EmailSignup } from '@/components/home/EmailSignup';
import { SocialProof } from '@/components/home/SocialProof';

export default function Home() {
  return (
    <div className="min-h-screen text-ink selection:bg-accent/30 font-body">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AgentLiveWidget />
        <ProductGrid />
        <SocialProof />
        <DemandRadarPreview />
        <ShipFasterEngine />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
}
