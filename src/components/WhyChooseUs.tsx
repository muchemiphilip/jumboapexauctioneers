import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Zap, Shield, Users, Clock } from 'lucide-react';

const features = [
  { icon: Clock, text: 'Trusted legacy since 1998' },
  { icon: Shield, text: 'Seamless, transparent auction processes' },
  { icon: Zap, text: 'Modern digital-first approach' },
  { icon: Users, text: 'Tailored client solutions' },
  { icon: Star, text: '"Reliability You Can Bid On" Experience' },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Why Choose <span className="gold-text">Jumbo Apex</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the difference of working with Kenya's most trusted auctioneering firm
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 premium-card group hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
