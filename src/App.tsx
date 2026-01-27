import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProductShowcase } from './components/ProductShowcase';

function App() {
  return (
    <MainLayout>
      <Hero />
      <BentoGrid />
      <ProductShowcase />
    </MainLayout>
  );
}

export default App;
