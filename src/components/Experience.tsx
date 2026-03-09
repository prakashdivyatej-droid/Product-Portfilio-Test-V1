import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { resumeData } from '../data';
import { Briefcase, Calendar, MapPin, TrendingUp, ArrowRight } from 'lucide-react';

interface ExperienceCardProps {
  job: typeof resumeData.work[number];
  index: number;
}

function ExperienceCard({ job, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0.3,
        scale: isInView ? 1 : 0.98,
        x: isInView ? 0 : index % 2 === 0 ? -10 : 10
      }}
      transition={{ duration: 0.5 }}
      className={`relative group p-8 md:p-12 rounded-[3rem] border transition-all duration-700 ${
        isInView 
          ? 'bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_50px_-12px_rgba(79,70,229,0.2)]' 
          : 'bg-white/[0.02] border-white/5'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-2xl transition-colors duration-500 ${
              isInView ? 'bg-indigo-600 text-white' : 'bg-white/5 text-white/40'
            }`}>
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{job.position}</h3>
              <p className="text-indigo-400 font-medium text-lg">{job.company}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 text-sm font-bold uppercase tracking-widest text-white/30">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {job.startDate} — {job.endDate}
            </div>
            {job.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.location}
              </div>
            )}
          </div>

          {job.metrics && (
            <div className="flex flex-wrap gap-3 mb-8">
              {job.metrics.map((metric, i) => (
                <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                  isInView ? 'bg-indigo-500/20 border-indigo-500/20' : 'bg-white/5 border-white/5'
                }`}>
                  <TrendingUp className="w-3 h-3 text-indigo-400" />
                  <span className="text-[10px] font-black text-white uppercase tracking-tighter">{metric}</span>
                </div>
              ))}
            </div>
          )}

          <ul className="space-y-4">
            {job.highlights.map((bullet, i) => (
              <li key={i} className="flex gap-4 text-white/50 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                <ArrowRight className={`w-4 h-4 mt-1 shrink-0 text-indigo-500 transition-transform duration-500 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative background element */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[100px] transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} />
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 text-center"
      >
        <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/20 mb-4 block">The Professional Timeline</span>
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Experience</h2>
      </motion.div>

      <div className="relative space-y-12">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        
        {resumeData.work.map((job, index) => (
          <div key={`${job.company}-${index}`}>
            <ExperienceCard job={job} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
