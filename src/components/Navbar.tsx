import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Menu, X, Home, Briefcase, Cpu, Layers, GraduationCap } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Skills', href: '#skills', icon: <Cpu className="w-4 h-4" /> },
  { name: 'Projects', href: '#projects', icon: <Layers className="w-4 h-4" /> },
  { name: 'Education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter text-white"
          >
            DP<span className="text-white/20">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <a
              href="mailto:prakashdivyatej@gmail.com"
              className="px-6 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 text-2xl font-bold text-white/60 hover:text-white transition-colors"
          >
            <span className="p-3 bg-white/5 rounded-xl">{item.icon}</span>
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
