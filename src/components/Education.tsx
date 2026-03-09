import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 mb-4 block">Academic Background</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Education</h2>
      </motion.div>

      <div className="space-y-12">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex gap-8 md:gap-12"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              {index !== resumeData.education.length - 1 && (
                <div className="w-px flex-1 bg-gradient-to-b from-indigo-500/20 to-transparent my-4" />
              )}
            </div>

            <div className="pb-12">
              <div className="flex items-center gap-3 text-indigo-400/60 text-xs font-bold uppercase tracking-widest mb-3">
                <Calendar className="w-3 h-3" />
                {edu.startDate} — {edu.endDate}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.institution}</h3>
              {edu.area && <p className="text-white/60 font-medium">{edu.area}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
