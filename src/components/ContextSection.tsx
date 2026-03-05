import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ContextSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up elements sequentially
      gsap.from(".ctx-fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
      
      // Reveal the constraints box slightly later
      gsap.from(".ctx-box", {
        scrollTrigger: {
          trigger: ".ctx-box",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 border-t border-black/5 relative z-10 overflow-hidden"
      id="context"
    >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0 animate-gradient"
        style={{
          background: "linear-gradient(120deg, #72b9bb, #b5d9d9, #ffd1bd, #ffebe0, #8cc5b8, #dbf4a4)",
          backgroundSize: "300% 300%"
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-white/20 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 ctx-fade-up">
          <h2 className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-3">Context & Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">Understanding the Landscape</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Left Column: Landscape & Flow */}
          <div className="lg:col-span-7 space-y-16">
            
            <div className="ctx-fade-up">
              <h4 className="text-2xl font-medium text-gray-900 mb-4">Empowering the Citizens of Qatar</h4>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                As a critical utility provider, Kahramaa is woven into the daily lives of its citizens. In the modern government sector, a digital platform isn't just a convenience—it is a foundation of civic trust. Users expect utility apps to be secure, highly accessible, and fiercely intuitive. Our audit is framed by this standard: treating the app not just as a transactional tool, but as a <strong className="text-gray-900 font-medium">government-grade digital service</strong>.
              </p>
            </div>

            <div className="ctx-fade-up">
              <h4 className="text-2xl font-medium text-gray-900 mb-4">A Targeted Investigation</h4>
              <p className="text-gray-600 leading-relaxed text-lg font-light mb-6">
                To provide actionable, high-impact insights, we focused our evaluation on a singular, critical user journey rather than a sprawling feature-by-feature review.
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 text-[16px] font-medium text-[#161616]">
                  <span>Login</span>
                  <span>→</span>
                  <span>Home Dashboard</span>
                  <span>→</span>
                  <span>Services</span>
                  <span>→</span>
                  <span>Bill Payment</span>
                  <span>→</span>
                  <span>Feedback</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed font-light">
                <strong className="text-gray-900 font-medium">Why this flow?</strong> Bill payment is the absolute core utility of the app. Friction here directly impacts revenue collection, drives costly customer support calls, and shapes the primary perception of the brand.
              </p>
            </div>
            
          </div>

          {/* Right Column: Lenses */}
          <div className="lg:col-span-5 ctx-fade-up">
            <div className="bg-[#ffffffa3] rounded-[2px] p-8 border border-[color-mix(in_oklab,#165543_11%,transparent)] h-full">
              <h4 className="text-2xl font-medium text-gray-900 mb-6">Our Audit Lenses</h4>
              <p className="text-gray-500 font-light mb-8">We analyzed the interface through 7 distinct UX/UI criteria:</p>
              
              <ul className="space-y-5">
                {[
                  "Experience & Task Execution",
                  "Flow Logic & Architecture",
                  "Trust & Accessibility (WCAG 2.2)",
                  "UI Consistency & Design System",
                  "Visual Design & Brand Expression",
                  "Content & Microcopy",
                  "Strategic Market Fit"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-light">
                    <div className="w-2 h-2rounded-[2px]-[2px] bg-[#FFE600] mr-4 flex-shrink-0 shadow-sm border border-black/5"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Constraints Box */}
        <div className="ctx-box bg-[#ffffffa3] rounded-[2px] p-8 md:p-10 border border-[color-mix(in_oklab,#165543_11%,transparent)] relative overflow-hidden group">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FFE600] transition-all duration-300 group-hover:w-3"></div>
          
          <h4 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Audit Parameters & Limitations
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-gray-900 font-medium mb-2">A Diagnostic Snapshot</h5>
              <p className="text-gray-500 text-sm leading-relaxed">This is a focused heuristic evaluation, not an exhaustive platform audit covering all edge cases.</p>
            </div>
            <div>
              <h5 className="text-gray-900 font-medium mb-2">Prototype Environment</h5>
              <p className="text-gray-500 text-sm leading-relaxed">Conducted using a Figma prototype. Technical investigations into live rendering, interactive micro-animations, and true device performance were constrained.</p>
            </div>
            <div>
              <h5 className="text-gray-900 font-medium mb-2">Heuristic Over Data</h5>
              <p className="text-gray-500 text-sm leading-relaxed">Without access to live quantitative analytics (drop-off rates) or qualitative user interviews, our findings are expert hypotheses rooted in industry best practices.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
