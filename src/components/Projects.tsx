import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4 block">Personal Initiatives</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
          >
            <div className="p-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-indigo-500/5 text-indigo-400/40 group-hover:text-indigo-400 transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex gap-4">
                  <button className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">{project.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-4">
                {project.description}
              </p>

              <div className="mt-auto space-y-4">
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <div key={i} className="flex gap-4 text-xs text-white/60 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500/40 shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
