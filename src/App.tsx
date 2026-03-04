import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { auditData, Category, Finding } from './data';
import { IphoneMockup } from './components/IphoneMockup';
import { SeverityBadge } from './components/SeverityBadge';
import { GridBackground } from './components/GridBackground';
import { ArrowDown, Zap } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#f4f5f4]/80 backdrop-blur-md border-b border-black/5">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
        <Zap className="text-white w-4 h-4" />
      </div>
      <span className="font-semibold tracking-tight">UX Audit</span>
    </div>
    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
      <a href="#experience-task-execution" className="hover:text-black transition-colors">Experience</a>
      <a href="#flow-logic-system-architecture" className="hover:text-black transition-colors">Flow</a>
      <a href="#visual-design-brand-expression" className="hover:text-black transition-colors">Visual</a>
    </div>
    <button className="bg-[#e2ff3d] text-black px-6 py-2 rounded-full font-medium hover:bg-[#d4f52d] transition-colors shadow-sm">
      Download PDF
    </button>
  </nav>
);

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-6">
            Kahramaa App <br />
            <span className="text-gray-400">UX/UI Audit</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-light">
            A comprehensive review of the mobile experience, identifying critical friction points and opportunities for modernization.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center"
        >
          <a href="#experience-task-execution" className="flex flex-col items-center gap-2 text-gray-400 hover:text-black transition-colors">
            <span className="text-sm font-medium uppercase tracking-widest">Explore Findings</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-10">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#e2ff3d] to-transparent rounded-full blur-3xl" />
      </motion.div>
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
      className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm relative overflow-hidden group"
    >
      {/* Connecting line dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300 -ml-1 hidden lg:block" />
      
      <div className="flex flex-col lg:flex-row gap-12 items-center">
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
            
            <div className="bg-[#f4f5f4] p-6 rounded-2xl border border-black/5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Direction</h4>
              <p className="text-gray-900 font-medium leading-relaxed">{finding.direction}</p>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto flex justify-center">
          <IphoneMockup src={finding.screenshotUrl} alt={finding.title} />
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
  <footer className="bg-black text-white py-24 mt-24">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h2 className="text-3xl font-medium tracking-tight mb-2">Ready to transform your app?</h2>
        <p className="text-gray-400">Let's turn these findings into a world-class experience.</p>
      </div>
      <button className="bg-[#e2ff3d] text-black px-8 py-4 rounded-full font-medium hover:bg-[#d4f52d] transition-colors text-lg">
        Start a Project
      </button>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 selection:bg-[#e2ff3d] selection:text-black">
      <GridBackground />
      <Navbar />
      <Hero />
      
      <main>
        {auditData.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}
