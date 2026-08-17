import { Building2, Banknote, Car, ClipboardCheck, PackageOpen, Warehouse } from 'lucide-react';

export const services = [
  {
    slug: 'property-auction',
    icon: Building2,
    title: 'Property Auction',
    description:
      'We specialize in the auctioning of residential, commercial, and industrial properties. Our expertly managed auctions ensure competitive bidding and optimal returns for both buyers and sellers.',
    cta: 'Book Property Auction',
    image: 'https://source.unsplash.com/1200x800/?real-estate,estate,auction',
    imageAlt: 'Residential and commercial properties staged for auction',
    details:
      'Our Property Auction service covers pre-auction valuation, marketing to targeted buyers, on-site and online auction options, and post-auction settlement. We ensure legal compliance and provide clear title transfer guidance to successful bidders.',
  },
  {
    slug: 'debt-recovery-repossessions',
    icon: Banknote,
    title: 'Debt Recovery & Repossessions',
    description:
      'We partner with financial institutions and corporate clients to facilitate efficient, ethical, and legally sound recovery of assets and collateral.',
    cta: 'Start Recovery Process',
    image: 'https://source.unsplash.com/1200x800/?finance,documents,bank',
    imageAlt: 'Financial documents and secure asset recovery process',
    details:
      'Our Debt Recovery service includes asset tracing, legally compliant repossession procedures, secure storage, and resale via auction or private sale to maximize recovery for lenders while ensuring regulatory compliance.',
  },
  {
    slug: 'movable-assets-auction',
    icon: Car,
    title: 'Private Sale / Public Auction of Movable Assets',
    description:
      'From motor vehicles to industrial machinery, we conduct well-organized auctions for movable assets ensuring transparency and fair market value realization.',
    cta: 'List Movable Asset',
    image: 'https://source.unsplash.com/1200x800/?vehicle,car,auction',
    imageAlt: 'Vehicles lined up for auction',
    details:
      'Movable asset services include collection, photographing and cataloguing, secure storage, online and physical auction listings, and buyer settlement. We work with clients to determine the best sale strategy per asset.',
  },
  {
    slug: 'asset-valuation',
    icon: ClipboardCheck,
    title: 'Asset Valuation & Appraisal',
    description:
      'We provide accurate, compliant valuations for real estate, vehicles, machinery, and equipment — supporting banks, legal firms, and individual clients.',
    cta: 'Request Valuation',
    image: 'https://source.unsplash.com/1200x800/?survey,valuation,inspection',
    imageAlt: 'Professional appraiser evaluating property and assets',
    details:
      'Valuation services provide documented appraisals by certified valuers, market-comparative analysis, and reports suitable for lending, litigation, or sale purposes.',
  },
  {
    slug: 'liquidation-estate-sales',
    icon: PackageOpen,
    title: 'Liquidation/Disposal & Estate Sales',
    description:
      'We handle disposal of both movable and immovable assets with professionalism ensuring legal compliance and maximum value.',
    cta: 'Arrange Liquidation',
    image: 'https://source.unsplash.com/1200x800/?estate-sale,liquidation,boxes',
    imageAlt: 'Estate sale items thoughtfully displayed and catalogued',
    details:
      'Liquidation and estate sale services include asset assessment, secure storage, estate inventory creation, targeted marketing and managed sale or auction events tailored to client timelines.',
  },
  {
    slug: 'storage-yard-services',
    icon: Warehouse,
    title: 'Storage Yard Services',
    description:
      'Storage available at Pangani Auction Centre (0.256 hectares) with 24/7 CCTV, guarded security, plus option to store repossessed vehicles in approved client yards.',
    cta: 'Arrange Storage',
    image: 'https://source.unsplash.com/1200x800/?warehouse,storage,yard',
    imageAlt: 'Secure storage yard and warehouse facilities',
    details:
      'Storage services offer secure yards with CCTV and guarded access, documentation of asset intake, insured holding periods, and logistics support for collection and delivery post-sale.',
  },
];

export default services;
