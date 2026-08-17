import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import services from '@/lib/services';
import placeholder from '@/assets/hero-bg.jpg';
import React from 'react';

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== placeholder) {
      target.src = placeholder as unknown as string;
      target.className = 'w-full h-full object-cover';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group premium-card p-0 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43,74%,58%,0.1)] overflow-hidden"
    >
      <Link to={`/services/${service.slug}`} className="block h-full">
        {/* Image */}
        {service.image && (
          <div className="relative w-full h-44 md:h-40 lg:h-44 overflow-hidden">
            <img
              src={service.image}
              alt={service.imageAlt || service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={handleImgError}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25 pointer-events-none" />
          </div>
        )}

        <div className="p-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-300 group-hover:scale-110">
            <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="gold-text">Professional</span> Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive auctioneering and asset management solutions tailored to meet 
            the diverse needs of individuals, corporations, and financial institutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
