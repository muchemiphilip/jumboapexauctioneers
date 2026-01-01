import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mr. Justus Matundura',
    role: 'Founder & Patron',
    description: 'Founder of Jumbo Airlink & KENSAP Foundation. A visionary leader who established the foundation for excellence in auctioneering.',
    image: null,
  },
  {
    name: 'Mr. Ian Matundura',
    role: 'Managing Director',
    description: 'Leading Jumbo Apex Auctioneers with innovation and integrity, continuing the legacy of transparent and professional services.',
    image: null,
  },
];

const TeamSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="gold-text">Leadership</span> Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Meet the visionaries behind Jumbo Apex Auctioneers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="premium-card p-8 text-center hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43,74%,58%,0.15)]">
                {/* Avatar */}
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_30px_hsl(43,74%,58%,0.3)] transition-all duration-500">
                    <User className="w-16 h-16 text-accent/60 group-hover:text-accent transition-colors" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
