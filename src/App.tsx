import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { CollectionPage } from './pages/Collection/CollectionPage';
import { AboutPage } from './pages/About/AboutPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { PrivacyPage } from './pages/Legal/PrivacyPage';
import { TermsPage } from './pages/Legal/TermsPage';
import { SecurityAuditPage } from './pages/Legal/SecurityAuditPage';
import { Showroom3D } from './components/Showroom/Showroom3D';
import { HERO_VEHICLE } from './data/vehicles';
import { useLenis } from './hooks/useLenis';

function AppContent() {
  useLenis();
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen selection:bg-red-500 selection:text-white relative font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showroom" element={<Showroom3D vehicle={HERO_VEHICLE} onBack={() => navigate('/')} />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/security-audit" element={<SecurityAuditPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
