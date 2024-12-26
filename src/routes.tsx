import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { WebDomains } from './pages/web-domains';
import { Mail } from './pages/mail';
import { Databases } from './pages/databases';
import { Security } from './pages/security';
import { Settings } from './pages/settings';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/web" element={<WebDomains />} />
      <Route path="/mail" element={<Mail />} />
      <Route path="/databases" element={<Databases />} />
      <Route path="/security" element={<Security />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}