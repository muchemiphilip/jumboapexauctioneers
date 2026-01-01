import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of properties do you auction?',
    answer: 'We auction residential, commercial, and industrial properties across Kenya. Our expert team ensures competitive bidding and optimal returns for both buyers and sellers.',
  },
  {
    question: 'How does the debt recovery process work?',
    answer: 'We partner with financial institutions to facilitate efficient, ethical, and legally sound recovery of assets. Our process includes proper documentation, fair valuation, and transparent auction procedures.',
  },
  {
    question: 'What are your valuation services?',
    answer: 'We provide accurate, compliant valuations for real estate, vehicles, machinery, and equipment. Our valuations are accepted by banks, legal firms, and government institutions.',
  },
  {
    question: 'Do you offer storage services?',
    answer: 'Yes, we offer secure storage at our Pangani Auction Centre (0.256 hectares) with 24/7 CCTV surveillance and guarded security. We also arrange storage in approved client yards.',
  },
  {
    question: 'How can I participate in an auction?',
    answer: 'Contact us via phone or WhatsApp to register for upcoming auctions. We\'ll guide you through the registration process and provide all necessary information about available items.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'While headquartered in Nairobi, we conduct auctions and provide services across Kenya. Our network extends to all major counties and regions.',
  },
];

const FAQSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find answers to common questions about our auctioneering services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="premium-card px-6 border border-border/50 hover:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
