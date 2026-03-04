import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { auditData, Category, Finding } from './data';
import { SeverityBadge } from './components/SeverityBadge';
import { GridBackground } from './components/GridBackground';
import { ContextSection } from './components/ContextSection';
import { HeroCarousel } from './components/HeroCarousel';
import { ArrowDown, Zap } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f4f5f4]/80 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/logos/ey_logo.svg" alt="EY Logo" className="h-[36px] w-auto" />
        <img src="/logos/Kahramaa_logo.svg" alt="Kahramaa Logo" className="h-[36px] w-auto" />
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#context" className="hover:text-black transition-colors">Context & Methodology</a>
        <a href="#experience-task-execution" className="hover:text-black transition-colors">Findings</a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden min-h-screen">
      <div className="max-w-5xl mx-auto px-6 text-center z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="bg-[#FFE600] text-black px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm border border-black/5">
            UX/UI Audit
          </div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-6">
            Kahramaa App
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            A targeted, heuristic evaluation of the core user journey, identifying critical friction points and actionable opportunities for modernization.
          </p>
        </motion.div>
        
        <HeroCarousel />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center mt-12"
        >
          <a href="#experience-task-execution" className="flex flex-col items-center gap-2 text-gray-400 hover:text-black transition-colors">
            <span className="text-sm font-medium uppercase tracking-widest">Explore Findings</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const FindingCard: React.FC<{ finding: Finding; index: number }> = ({ finding, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-[2px] p-8 md:p-10 shadow-sm relative overflow-hidden group"
    >
      {/* Connecting line dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-[2px] bg-gray-300 -ml-1 hidden lg:block" />
      
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 space-y-8">
          <div>
            <SeverityBadge severity={finding.severity} />
            <h3 className="text-3xl font-medium mt-4 mb-2 tracking-tight">{finding.title}</h3>
            <p className="text-gray-500 font-medium">{finding.evidence}</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Impact</h4>
              <p className="text-gray-800 text-lg leading-relaxed">{finding.impact}</p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Why it matters</h4>
              <p className="text-gray-600 leading-relaxed">{finding.whyItMatters}</p>
            </div>
            
            <div className="bg-[#f4f5f4] p-6 rounded-[2px] border border-black/5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Direction</h4>
              <p className="text-gray-900 font-medium leading-relaxed">{finding.direction}</p>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto flex justify-center shrink-0">
          <img 
            src={finding.screenshotUrl} 
            alt={finding.title} 
            className="w-full max-w-[320px] h-auto object-contain rounded-[2px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <section id={category.id} className="relative py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
              {category.title}
            </h2>
            <div className="h-1 w-12 bg-black mb-6" />
            <p className="text-gray-500">
              {category.findings.length} findings identified in this category.
            </p>
          </div>
        </div>
        
        <div className="lg:w-2/3 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-0 top-10 bottom-10 w-px bg-black/5 hidden lg:block" />
          
          <div className="flex flex-col gap-16 lg:pl-12">
            {category.findings.map((finding, index) => (
              <FindingCard key={finding.id} finding={finding} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#f4f5f4] border-t border-black/5 py-24 mt-24">
    <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
      <img src="/logos/ey_logo.svg" alt="EY Logo" className="h-16 w-auto" />
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 selection:bg-[#FFE600] selection:text-black">
      <GridBackground />
      <Navbar />
      <Hero />
      
      <ContextSection />

      <main>
        {auditData.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}
