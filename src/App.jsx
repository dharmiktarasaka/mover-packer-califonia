import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { QuoteModal } from './components/ui/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ChicagoLocationPage } from './pages/ChicagoLocationPage';

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalDefaults, setQuoteModalDefaults] = useState({});

  const handleOpenQuoteModal = (defaults) => {
    if (defaults) {
      setQuoteModalDefaults(defaults);
    } else {
      setQuoteModalDefaults({});
    }
    setQuoteModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 selection:bg-gold selection:text-slate-950 font-sans">
        {/* Navigation */}
        <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/services/:slug"
              element={<ServiceDetailPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/locations"
              element={<LocationsPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/locations/:citySlug"
              element={<LocationDetailPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/chicago"
              element={<ChicagoLocationPage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
            <Route
              path="/resources"
              element={<ResourcesPage />}
            />
            <Route
              path="/resources/:slug"
              element={<ResourceDetailPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            {/* Catch-all to HomePage */}
            <Route
              path="*"
              element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
            />
          </Routes>
        </div>

        {/* Global Dark Luxury Footer */}
        <Footer />

        {/* Global Floating/Triggerable Quote Estimation Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultService={quoteModalDefaults.service}
          defaultOrigin={quoteModalDefaults.from}
          defaultDestination={quoteModalDefaults.to}
        />
      </div>
    </Router>
  );
}

export default App;
