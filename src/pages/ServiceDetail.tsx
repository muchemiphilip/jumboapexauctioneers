import { useParams, Link } from 'react-router-dom';
import services from '@/lib/services';
import { ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <p className="text-muted-foreground mb-6">The requested service could not be located.</p>
        <Link to="/" className="inline-flex items-center gap-2 text-accent">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-accent mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        {/* Hero image */}
        {service.image && (
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img
              src={service.image}
              alt={service.imageAlt || service.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
            <div className="absolute left-6 bottom-6 text-white">
              <h1 className="text-3xl md:text-4xl font-serif font-bold drop-shadow">{service.title}</h1>
              <p className="mt-2 text-sm md:text-base max-w-xl drop-shadow">{service.description}</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="premium-card p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-accent/10 border border-accent/20 mb-6">
                <service.icon className="w-9 h-9 text-accent" />
              </div>
              <h2 className="text-xl font-serif font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground mt-4">{service.description}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="premium-card p-8">
              <h2 className="text-xl font-bold mb-4">About this service</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.details}</p>

              <h3 className="text-lg font-semibold mb-3">Next steps</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Contact our team to discuss your needs.</li>
                <li>Arrange valuation and inspection where applicable.</li>
                <li>Choose online or on-site auction options.</li>
              </ul>

              <a
                href="mailto:jumboapexauc@yahoo.com"
                className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium"
              >
                Contact Us About {service.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
