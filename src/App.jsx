import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Research from './components/Research';
import Contact from './components/Contact';
import Resume from './pages/Resume';

// Main Landing Page Layout
const Home = () => {
  return (
    <>
      {/* Hero Section - Full Width Wrapper (outside main content constraints) */}
      <Hero />

      {/* Subtle Divider Line */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent"></div>
      </div>

      {/* Rest of Content - Normal Block Layout */}
      <div className="space-y-24 md:space-y-32 pb-32 pt-12 md:pt-16 px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto w-full">
        <section id="education" className="scroll-mt-32">
          <Education />
        </section>

        <section id="experience" className="scroll-mt-32">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-32">
          <Projects />
        </section>

        <section id="research" className="scroll-mt-32">
          <Research />
        </section>

        <section id="contact" className="scroll-mt-32 pt-8">
          <Contact />
        </section>
      </div>
    </>
  );
};

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

// Wrapper handles the Global Sidebar + Content Layout
const Layout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans flex text-slate-800">

      {/* Left Column: Fixed Sidebar */}
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* Right Column: Main Content */}
      <div className="flex-1 lg:pl-96 flex flex-col min-w-0 bg-transparent">

        {/* Sticky Header inside Right Column */}
        <Navbar toggleMobileSidebar={() => setIsMobileOpen(true)} />

        <main className="flex-1 pt-20 md:pt-16">
          <AnimatedRoutes />
        </main>
      </div>
    </div>
  );
}

function App() {
  // Main Router - basename needed for GitHub Pages subdirectory deployment
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout />
    </Router>
  );
}

export default App;
