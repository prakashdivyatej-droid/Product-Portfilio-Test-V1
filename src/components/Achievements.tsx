import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Trophy, Star, Zap, Target } from 'lucide-react';

export default function Achievements() {
  // Extracting top metrics from the first job as "Top 3 Impact"
  const topMetrics = resumeData.work[0].metrics?.slice(0, 3) || [];

  return (
    <section id="achievements" className="py-32 px-6 bg-indigo-500/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-indigo-600 text-white p-8 md:p-12 rounded-[3rem] mb-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-[0_0_50px_rgba(79,70,229,0.3)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-4 block">High Impact Results</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Top Performance Metrics</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
            {topMetrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                  {metric.split(' ')[0]}
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                  {metric.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AchievementCard
            icon={<Trophy className="w-6 h-6" />}
            title="Onboarding Efficiency"
            description="Reduced customer onboarding TAT from 10 days to 2 days through AI integration."
            delay={0.1}
          />
          <AchievementCard
            icon={<Target className="w-6 h-6" />}
            title="Accuracy Improvement"
            description="Cut account rejection rate from 30% to 5% using AI-powered document validation."
            delay={0.2}
          />
          <AchievementCard
            icon={<Zap className="w-6 h-6" />}
            title="Ecosystem Growth"
            description="Decreased customer drop-off by 50% through strategic product ecosystem integration."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ icon, title, description, delay }: { icon: ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group p-8 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-indigo-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/40 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}
