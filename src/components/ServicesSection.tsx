import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Banknote, 
  Car, 
  ClipboardCheck, 
  PackageOpen, 
  Warehouse
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Property Auction',
    description: 'We specialize in the auctioning of residential, commercial, and industrial properties. Our expertly managed auctions ensure competitive bidding and optimal returns for both buyers and sellers.',
    cta: 'Book Property Auction',
  },
  {
    icon: Banknote,
    title: 'Debt Recovery & Repossessions',
    description: 'We partner with financial institutions and corporate clients to facilitate efficient, ethical, and legally sound recovery of assets and collateral.',
    cta: 'Start Recovery Process',
  },
  {
    icon: Car,
    title: 'Private Sale / Public Auction of Movable Assets',
    description: 'From motor vehicles to industrial machinery, we conduct well-organized auctions for movable assets ensuring transparency and fair market value realization.',
    cta: 'List Movable Asset',
  },
  {
    icon: ClipboardCheck,
    title: 'Asset Valuation & Appraisal',
    description: 'We provide accurate, compliant valuations for real estate, vehicles, machinery, and equipment — supporting banks, legal firms, and individual clients.',
    cta: 'Request Valuation',
  },
  {
    icon: PackageOpen,
    title: 'Liquidation/Disposal & Estate Sales',
    description: 'We handle disposal of both movable and immovable assets with professionalism ensuring legal compliance and maximum value.',
    cta: 'Arrange Liquidation',
  },
  {
    icon: Warehouse,
    title: 'Storage Yard Services',
    description: 'Storage available at Pangani Auction Centre (0.256 hectares) with 24/7 CCTV, guarded security, plus option to store repossessed vehicles in approved client yards.',
    cta: 'Arrange Storage',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group premium-card p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43,74%,58%,0.1)]"
    >
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
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
