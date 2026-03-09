import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import { resumeData } from './data';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <Splash onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <AnimatedBackground />
            <ScrollProgress />
            <Navbar />
            
            <div id="home">
              <Hero />
            </div>

            <Achievements />
            <Experience />
            <Skills />
            <Projects />
            <Education />

            {/* Additional Section for Content Completeness */}
            <section className="py-32 px-6 max-w-4xl mx-auto border-t border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-8">Additional Info</h3>
                  <div className="space-y-4">
                    {resumeData.extra.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-8">Connect</h3>
                  <div className="space-y-6">
                    <a href={`mailto:${resumeData.basics.email}`} className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                      <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                        <span className="font-medium">{resumeData.basics.email}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href={`tel:${resumeData.basics.phone}`} className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                      <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                        <span className="font-medium">{resumeData.basics.phone}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href={resumeData.basics.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                      <div className="flex items-center gap-4">
                        <Linkedin className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                        <span className="font-medium">LinkedIn Profile</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer className="py-20 px-6 text-center border-t border-white/5">
              <p className="text-white/20 text-[10px] uppercase tracking-[0.4em]">
                &copy; {new Date().getFullYear()} {resumeData.basics.name}. Built for the future.
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
