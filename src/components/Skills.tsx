import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Cpu, Layout, Settings, Users } from 'lucide-react';

export default function Skills() {
  const icons = {
    'Product Management': <Layout className="w-5 h-5" />,
    'Technical': <Cpu className="w-5 h-5" />,
    'Tools': <Settings className="w-5 h-5" />,
    'Soft Skills': <Users className="w-5 h-5" />
  };

  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4 block">Core Competencies</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Skills & Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resumeData.skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400">
              {icons[skillGroup.name as keyof typeof icons] || <Settings className="w-5 h-5" />}
            </div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{skillGroup.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.keywords.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-[10px] font-bold text-white/40 border border-white/5 rounded-full hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-[2.5rem] border border-white/10 bg-indigo-500/[0.02]"
      >
        <h3 className="text-sm font-bold text-white/60 mb-6 uppercase tracking-widest text-center">Certifications</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {resumeData.certifications.map((cert, i) => (
            <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-medium text-white/80 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-colors">
              {cert}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
