import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/254717501864?text=Hello%20Jumbo%20Apex%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
      </div>
      <span className="font-semibold hidden sm:block group-hover:block transition-all">
        Chat with Us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
