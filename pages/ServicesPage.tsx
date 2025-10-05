
import React, { useState } from 'react';

interface Service {
  emoji: string;
  title: string;
  description: string;
  dataSources: string;
  callout: string;
}

const servicesData: Service[] = [
  {
    emoji: '🌡️',
    title: 'Climate Forecasting',
    description: 'Predicts floods, droughts, and heatwaves decades ahead.',
    dataSources: 'NASA data: MODIS, GPM, and SMAP.',
    callout: 'See your region’s 2040 forecast today.',
  },
  {
    emoji: '🏙️',
    title: 'Real Estate & Investment Intelligence',
    description: 'Climate-adjusted valuations for developers and ESG investors.',
    dataSources: 'Shows long-term ROI stability, insurance risk, and green certifications.',
    callout: 'Protect your portfolio from tomorrow’s risks.',
  },
  {
    emoji: '🌾',
    title: 'Agriculture & Drought Analytics',
    description: 'Forecasts rainfall, soil health, and irrigation patterns.',
    dataSources: 'Supports farmers with long-term planning.',
    callout: 'Smarter crops, stronger seasons.',
  },
  {
    emoji: '🛰️',
    title: 'Orbital Intelligence for Satellite Operators',
    description: 'Forecasts debris density, solar storms, and radiation zones.',
    dataSources: 'Utilizes NASA ODPO data.',
    callout: 'Safer paths, longer satellite lifespans.',
  },
  {
    emoji: '📊',
    title: 'Data & API Marketplace',
    description: 'Provides Nex2us datasets and climate APIs for governments, startups, and universities.',
    dataSources: 'Subscription tiers: Freemium / Premium / Enterprise.',
    callout: 'Integrate our intelligence into your platform.',
  },
];

// Fix: Refactored ServiceCard to use an interface for props and React.FC to prevent key prop errors.
interface ServiceCardProps {
  service: Service;
  isOpen: boolean;
  onClick: () => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ service, isOpen, onClick }) => {
  return (
    <div className="border border-teal/20 rounded-lg overflow-hidden transition-all duration-300 bg-navy-light hover:shadow-2xl hover:shadow-teal/20">
      <button 
        onClick={onClick} 
        className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
      >
        <div className="flex items-center">
          <span className="text-3xl mr-4">{service.emoji}</span>
          <h3 className="text-xl font-display font-bold text-light">{service.title}</h3>
        </div>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 text-gray-300 space-y-3">
          <p>{service.description}</p>
          <p className="text-sm text-gray-400">{service.dataSources}</p>
          <p className="font-semibold text-teal italic">"{service.callout}"</p>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-20 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Turning Space Data Into Decisions That Matter.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="#/contact" className="inline-block bg-teal text-navy font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:bg-amber">
          Explore Our Services → Contact Us for Partnership
        </a>
      </div>
    </div>
  );
}