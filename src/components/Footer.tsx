import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Property Auction',
    'Debt Recovery and Repossessions',
    'Asset Valuation',
    'Movable Asset Sales',
    'Liquidation Services',
    'Storage Services',
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg">
                <span className="text-forest font-serif font-bold text-xl">JA</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-foreground">Jumbo Apex</h3>
                <p className="text-accent text-xs font-medium tracking-wider uppercase">Auctioneers</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kenya's premier auctioneering firm since 1998. Trusted by individuals and corporations 
              for transparent, efficient, and legally compliant auction services.
            </p>
            <p className="text-accent font-serif italic text-lg">
              "Reliability You Can Bid On"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+254717501864" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  0717 501 864
                </a>
              </li>
              <li>
                <a href="mailto:jumboapexauc@yahoo.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  jumboapexauc@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Philadelphia House, 3rd Floor Wing B, Tom Mboya Street, Nairobi</span>
              </li>
              <li>
                <a
                  href="https://wa.me/254717501864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Jumbo Apex Auctioneers. All rights reserved.</p>
            <p>P.O. Box 11710 00400, Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
