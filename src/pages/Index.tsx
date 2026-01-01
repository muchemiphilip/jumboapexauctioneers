import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Jumbo Apex Auctioneers | Premier Auctioneers in Kenya | Property & Asset Auctions';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kenya\'s leading auctioneers since 1998. Expert property auctions, debt recovery, asset valuation, and repossession services in Nairobi. Trusted by 500+ corporate clients. Call 0717 501 864.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Kenya\'s leading auctioneers since 1998. Expert property auctions, debt recovery, asset valuation, and repossession services in Nairobi. Trusted by 500+ corporate clients. Call 0717 501 864.';
      document.head.appendChild(meta);
    }

    // Add keywords meta
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = 'auctioneers kenya, repossession services kenya, asset valuation, debt collection, Nairobi auctioneers, movable asset sales, estate liquidation kenya, storage yard Nairobi, property auction Kenya';
      document.head.appendChild(keywords);
    }

    // Add structured data for Local Business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Jumbo Apex Auctioneers",
      "description": "Kenya's premier auctioneering firm offering property auctions, debt recovery, asset valuation, and repossession services since 1998.",
      "url": "https://jumboapexauctioneers.co.ke",
      "telephone": "+254717501864",
      "email": "jumboapexauc@yahoo.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Philadelphia House, 3rd Floor Wing B, Tom Mboya Street",
        "addressLocality": "Nairobi",
        "postalCode": "00400",
        "addressCountry": "KE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -1.2834,
        "longitude": 36.8216
      },
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "$$",
      "sameAs": [],
      "image": "",
      "foundingDate": "1998",
      "areaServed": "Kenya"
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const ldScript = document.querySelector('script[type="application/ld+json"]');
      if (ldScript) {
        ldScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
