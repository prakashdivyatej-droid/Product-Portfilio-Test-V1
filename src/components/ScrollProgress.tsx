import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'achievements', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentSections = [...sections].reverse();
      for (const section of currentSections) {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 300) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      <div className="relative w-px h-64 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-indigo-500 origin-top"
          style={{ scaleY }}
        />
      </div>

      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center justify-end"
          >
            <span className={`absolute right-6 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 ${
              activeSection === section.id ? 'text-indigo-400' : 'text-white/40'
            }`}>
              {section.label}
            </span>
            <div className={`w-2 h-2 rounded-full border transition-all duration-500 ${
              activeSection === section.id 
                ? 'bg-indigo-500 border-indigo-500 scale-125 shadow-[0_0_10px_rgba(79,70,229,0.8)]' 
                : 'bg-transparent border-white/20 group-hover:border-indigo-500/40'
            }`} />
          </a>
        ))}
      </div>
    </div>
  );
}
