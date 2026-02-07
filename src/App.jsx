import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Antogravity from './pages/Antogravity';
import CodeGenerator from './pages/CodeGenerator';
import VaultLogin from './pages/VaultLogin';
import VaultPassword from './pages/VaultPassword';
import FingerprintScanner from './pages/FingerprintScanner';
import NotFound from './pages/NotFound';
import './styles/index.css';
import './styles/Terminal.css';
import './styles/animations.css';

/**
 * Main App component with React Router setup
 * All pages are wrapped in the Terminal component for consistent styling
 */
function App() {
  return (
    <Router>
      <Terminal title="Apex@kali: ~">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vault" element={<VaultLogin />} />
          <Route path="/vault-scan" element={<FingerprintScanner />} />
          <Route path="/vault-password" element={<VaultPassword />} />
          <Route path="/antogravity" element={<Antogravity />} />
          <Route path="/code-generator" element={<CodeGenerator />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Terminal>
    </Router>
  );
}

export default App;
