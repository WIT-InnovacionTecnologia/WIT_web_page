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
        <BentoGrid />
        <ProductShowcase />
      </div>
      <AIAssistant />
    </MainLayout>
  );
}

export default App;
