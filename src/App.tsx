import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { TimelinePage } from './pages/TimelinePage';
import { SentinelPage } from './pages/SentinelPage';
import { TeLPage } from './pages/TeLPage';
import { IoTPage } from './pages/IoTPage';
import { TotemsPage } from './pages/TotemsPage';
import { EcommercePage } from './pages/EcommercePage';
import { WifiUrbanPage } from './pages/WifiUrbanPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BentoGrid } from './components/BentoGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { AIAssistant } from './components/AIAssistant';

import Beams from './components/Beams';
import { LightRays } from './components/LightRays';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={
          <>
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
              <LightRays />
            </div>
            <div className="relative z-10">
              <Hero />
              <BentoGrid />
              <ProductShowcase />
            </div>
            <AIAssistant />
          </>
        } />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/products/sentinel" element={<SentinelPage />} />
        <Route path="/products/tel" element={<TeLPage />} />
        <Route path="/products/iot" element={<IoTPage />} />
        <Route path="/products/totems" element={<TotemsPage />} />
        <Route path="/products/ecommerce" element={<EcommercePage />} />
        <Route path="/products/wifi-urban" element={<WifiUrbanPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
