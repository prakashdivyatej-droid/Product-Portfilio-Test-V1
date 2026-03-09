import { motion, useScroll, useTransform } from 'motion/react';
import { resumeData } from '../data';
import { ChevronDown, Download, ExternalLink, Sparkles, Zap, ShieldCheck, Target } from 'lucide-react';
import { useRef, ReactNode } from 'react';

export default function Hero() {
  const { basics } = resumeData;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent -z-10" />
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px] -z-10" 
      />

      <motion.div
        style={{ opacity, scale }}
        className="text-center max-w-5xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.4em] uppercase border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md text-indigo-300"
        >
          <Sparkles className="w-3 h-3" />
          {basics.label}
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85] group cursor-default">
          <span className="relative inline-block hover:text-indigo-400 transition-colors duration-500">
            {basics.name.split(' ')[0]}
            <motion.span 
              className="absolute inset-0 text-indigo-500/20 -z-10 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: [1, -1, 1], y: [1, -1, 1] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            >
              {basics.name.split(' ')[0]}
            </motion.span>
          </span>
          <span className="text-white/20 block relative">
            {basics.name.split(' ')[1]}
          </span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge icon={<Zap className="w-4 h-4" />} text="AI Product Manager" />
          <Badge icon={<Target className="w-4 h-4" />} text="Digital Banking Specialist" />
          <Badge icon={<ShieldCheck className="w-4 h-4" />} text="FinTech & OCR Expert" />
        </div>

        <p className="text-xl md:text-2xl text-white/40 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
          Transforming banking ecosystems through <span className="text-indigo-400">AI-driven innovation</span>. 
          Expert in reducing TAT, cutting rejection rates, and scaling digital products globally.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToExperience}
            className="group relative px-12 py-6 bg-indigo-600 text-white font-black rounded-2xl overflow-hidden transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(79,70,229,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-[0.2em]">
              View Professional Journey
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          <a
            href="#resume"
            className="px-12 py-6 bg-white/5 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3 text-sm uppercase tracking-[0.2em]"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/10"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-black">Scroll to explore system</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-indigo-500/50 to-transparent"
        />
      </motion.div>

      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:flex flex-col gap-12">
        {['LinkedIn', 'Email'].map((social) => (
          <a
            key={social}
            href={social === 'LinkedIn' ? basics.url : `mailto:${basics.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 text-white/10 hover:text-indigo-400 transition-all duration-500"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] rotate-90 origin-left opacity-0 group-hover:opacity-100 transition-all">
              {social}
            </span>
            <div className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
              <ExternalLink className="w-5 h-5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
      <span className="text-indigo-400">{icon}</span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{text}</span>
    </div>
  );
}
