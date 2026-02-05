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
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { CulturePage } from './pages/CulturePage';
import { CareersPage } from './pages/CareersPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { SupportPage } from './pages/SupportPage';
import { SalesPage } from './pages/SalesPage';
import { OfficesPage } from './pages/OfficesPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardsPage } from './pages/DashboardsPage';
import { ReportsPage } from './pages/ReportsPage';
import { KPIsPage } from './pages/KPIsPage';
import { PowerBIPage, TableauPage, LookerPage } from './pages/BIInfrastructurePages';
import { ScrollToTop } from './components/ScrollToTop';
import { BentoGrid } from './components/BentoGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { AIAssistant } from './components/AIAssistant';

import { DemoRequestPage } from './pages/DemoRequestPage';

import Beams from './components/Beams';
import { LightRays } from './components/LightRays';

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/offices" element={<OfficesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-demo" element={<DemoRequestPage />} />
          <Route path="/bi/dashboards" element={<DashboardsPage />} />
          <Route path="/bi/reports" element={<ReportsPage />} />
          <Route path="/bi/kpis" element={<KPIsPage />} />
          <Route path="/bi/power-bi" element={<PowerBIPage />} />
          <Route path="/bi/tableau" element={<TableauPage />} />
          <Route path="/bi/looker" element={<LookerPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
