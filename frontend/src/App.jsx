import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Home from './pages/Home';
import SalesEnginePage from './pages/SalesEnginePage';
import BusinessOwnersPage from './pages/BusinessOwnersPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

// Admin Portal Pages
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import AdminDashboardPage from './admin/AdminDashboardPage';
import AdminBusinessEnquiries from './admin/AdminBusinessEnquiries';
import AdminFranchiseApplications from './admin/AdminFranchiseApplications';
import AdminContactMessages from './admin/AdminContactMessages';
import AdminResources from './admin/AdminResources';
import AdminSuccessStories from './admin/AdminSuccessStories';
import AdminSiteContent from './admin/AdminSiteContent';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/ai-sales-engine" element={<SalesEnginePage />} />
        <Route path="/business-owners" element={<BusinessOwnersPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="business-enquiries" element={<AdminBusinessEnquiries />} />
          <Route path="franchise-applications" element={<AdminFranchiseApplications />} />
          <Route path="contact-messages" element={<AdminContactMessages />} />
          <Route path="resources" element={<AdminResources />} />
          <Route path="success-stories" element={<AdminSuccessStories />} />
          <Route path="site-content" element={<AdminSiteContent />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
