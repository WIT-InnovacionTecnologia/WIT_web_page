import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { AboutUs } from './components/AboutUs';
import { TrustedBy } from './components/TrustedBy';
import { AIAssistant } from './components/AIAssistant';
import GradualBlur from './components/animations/GradualBlur';

import Beams from './components/Beams';
import SplashCursor from './components/animations/SplashCursor';

function App() {
  return (
    <MainLayout>
      <SplashCursor />
      <div className="fixed inset-0 z-0 hidden dark:block">
        <Beams
          beamWidth={3}
          beamHeight={35}
          beamNumber={20}
          lightColor="#ffffff"
          speed={1.0}
          noiseIntensity={2.0}
          scale={0.1}
          rotation={30}
        />
      </div>
      <div className="relative z-10">
        <Hero />
        <AboutUs />
        <BentoGrid />
        <ProductShowcase />
        <TrustedBy />
      </div>
      <AIAssistant />
      <GradualBlur preset="page-footer" zIndex={20} />
    </MainLayout>
  );
}

export default App;
