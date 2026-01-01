import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { History, Target, Eye, Heart } from 'lucide-react';

const timelineEvents = [
  { year: '1998', title: 'Foundation', description: 'Jumbo Apex Auctioneers established as part of the Jumbo Airlink legacy' },
  { year: '2005', title: 'Expansion', description: 'Extended services to include asset valuation and debt recovery' },
  { year: '2012', title: 'KENSAP Partnership', description: 'Strengthened ties with Kenya Self-Appointed Professionals foundation' },
  { year: '2020', title: 'Digital Transformation', description: 'Modernized operations with digital-first approach' },
  { year: '2024', title: 'Today', description: 'Leading auctioneering firm trusted by 500+ corporate clients' },
];

const values = [
  { icon: Target, title: 'Mission', description: 'To provide seamless, transparent, and legally compliant auction services that maximize value for our clients while upholding the highest standards of professionalism.' },
  { icon: Eye, title: 'Vision', description: 'To be Kenya\'s most trusted and innovative auctioneering firm, setting the benchmark for excellence in asset management and recovery services.' },
  { icon: Heart, title: 'Values', description: 'Integrity, Transparency, Professionalism, Client-First Approach, and Continuous Innovation in all our dealings.' },
];

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            About <span className="gold-text">Jumbo Apex</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            The story of Jumbo Apex Auctioneers is one of legacy, 
            growth, and innovation — deeply rooted in the pioneering success of its parent firm, 
            Jumbo Airlink Auctioneers. 
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={timelineRef}
          className="mb-24"
        >
          <div className="flex items-center gap-3 justify-center mb-10">
            <History className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-serif font-bold text-foreground">Our Journey</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-5 gap-4">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Year Badge */}
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent text-accent-foreground font-bold text-sm mb-4">
                    {event.year}
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-serif font-bold text-foreground mb-2">{event.title}</h4>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
              className="premium-card p-8 text-center group hover:border-accent/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <value.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
