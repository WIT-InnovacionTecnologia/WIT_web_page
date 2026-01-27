import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { AIAssistant } from './components/AIAssistant';

import { LightRays } from './components/LightRays';

function App() {
  return (
    <MainLayout>
      <LightRays />
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
