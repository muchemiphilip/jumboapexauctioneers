import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gavel, Users, Building, Calendar } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  endValue: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon: Icon, endValue, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const stepValue = endValue / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(stepValue * currentStep));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
        <span className="gold-text">{count}</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

const stats = [
  { icon: Gavel, endValue: 2500, suffix: '+', label: 'Auctions Completed' },
  { icon: Building, endValue: 500, suffix: '+', label: 'Corporate Clients' },
  { icon: Users, endValue: 10000, suffix: '+', label: 'Clients Served' },
  { icon: Calendar, endValue: 25, suffix: '+', label: 'Years of Legacy' },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our <span className="gold-text">Impact</span> in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Decades of excellence in auctioneering, building trust and delivering results across Kenya
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
