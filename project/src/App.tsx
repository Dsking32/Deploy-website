import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessPage from './pages/BusinessPage';
import PersonalPage from './pages/PersonalPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import Layout from './components/layout/Layout';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import SplashScreen from './components/SplashScreen';

// ScrollToTop component to reset scroll position on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/personal" element={<PersonalPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
          </Layout>
        </>
      )}
    </>
  );
}

export default App;