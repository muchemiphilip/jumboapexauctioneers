import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageCircle, ChevronDown, Shield, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const trustBadges = [
  { icon: Clock, text: '25+ Years Legacy' },
  { icon: Shield, text: 'Transparent' },
  { icon: Award, text: 'Certified' },
  { icon: Users, text: 'Trusted by 500+ Clients' },
];

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium auction gavel representing professional auctioneering services in Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 container mx-auto px-4 pt-20"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
              <Award className="w-4 h-4" />
              Kenya's Premier Auctioneers Since 1998
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            Reliability You Can{' '}
            <span className="gold-text">Bid On</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            Full-service auctioneering and asset management firm dedicated to delivering 
            transparent, efficient, and reliable auction services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+254717501864" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href="https://wa.me/254717501864?text=Hello%20Jumbo%20Apex%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button variant="ghost" size="xl" asChild>
              <a href="#services" className="flex items-center gap-2">
                View Services
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <badge.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent/60 hover:text-accent transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
