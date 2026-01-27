import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { AIAssistant } from './components/AIAssistant';

import Beams from './components/Beams';

function App() {
  return (
    <MainLayout>
      <div className="fixed inset-0 z-0 hidden dark:block">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={1.5}
          noiseIntensity={1.5}
          scale={0.15}
          rotation={25}
        />
      </div>
      <div className="relative z-10">
        <Hero />
        <BentoGrid />
        <ProductShowcase />
      </div>
      <AIAssistant />
    </MainLayout>
  );
}

export default App;
