import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { AIAssistant } from './components/AIAssistant';

function App() {
  return (
    <MainLayout>
      <Hero />
      <BentoGrid />
      <ProductShowcase />
      <AIAssistant />
    </MainLayout>
  );
}

export default App;
