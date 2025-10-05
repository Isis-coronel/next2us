
import React from 'react';

// Fix: Refactored ValueCard to use an interface for props and React.FC to prevent key prop errors.
interface ValueCardProps {
  title: string;
  description: string;
}
const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => (
  <div className="bg-navy p-6 rounded-lg border border-teal/20 transition-shadow duration-300 hover:shadow-lg hover:shadow-teal/20">
    <h4 className="text-xl font-bold font-display text-teal">{title}</h4>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

// Fix: Made children prop optional to fix "missing property" error.
const Section = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">{title}</h2>
    <div className="text-lg text-gray-300 max-w-3xl space-y-4">{children}</div>
  </div>
);

export default function AboutPage() {
  const values = [
    { title: 'Transparency', description: 'Data you can trust.' },
    { title: 'Innovation', description: 'AI and LEO working together.' },
    { title: 'Resilience', description: 'Protecting both assets and lives.' },
    { title: 'Sustainability', description: 'Commercializing space for Earth’s benefit.' },
  ];

  return (
    <div className="container mx-auto px-6 py-20 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <Section title="Our Mission">
          <p>At NEX2US, we connect space and Earth to make resilience measurable.</p>
          <p>Our mission is to translate NASA’s LEO data into actionable insights that help organizations, cities, and citizens plan confidently in a changing climate.</p>
        </Section>
        
        <Section title="Our Vision">
          <p>To build a world where every decision — from investment to infrastructure — is climate-informed and future-ready.</p>
        </Section>
        
        <Section title="Our Story">
          <p>Born from NASA’s open-data revolution, NEX2US emerged from a hackathon project in California to address one urgent need: turning orbital intelligence into everyday decision-making tools.</p>
          <p>Today, we bridge the gap between space data and sustainable growth.</p>
        </Section>

        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </div>

        <div className="text-center mt-20 border-t border-teal/20 pt-8">
          <p className="text-2xl font-display font-bold text-teal">
            Next to Us. From Space to Earth. That’s NEX2US.
          </p>
        </div>
      </div>
    </div>
  );
}