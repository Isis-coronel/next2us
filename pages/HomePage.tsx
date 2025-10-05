// FIX: Replaced placeholder content with a full implementation for the HomePage component.
// This resolves multiple compile errors and allows the application to render correctly.
import React from 'react';
import { NavLink } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-navy p-8 rounded-lg border border-teal/20 transition-all duration-300 hover:border-teal hover:-translate-y-2 hover:shadow-lg hover:shadow-teal/20">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-display font-bold text-teal mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-40 md:pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-light mb-4 leading-tight">
            Connecting Space to Earth for a Resilient Future.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            NEX2US translates NASA’s LEO data into actionable insights, empowering organizations to plan confidently in a changing climate.
          </p>
          <div>
            <NavLink
              to="/services"
              className="inline-block bg-teal text-navy font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:bg-amber"
            >
              Explore Our Solutions
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">What We Do</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            We provide predictive analytics for climate resilience, asset valuation, and orbital intelligence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🌡️"
              title="Climate Forecasting"
              description="Predict floods, droughts, and heatwaves decades ahead with unparalleled accuracy."
            />
            <FeatureCard
              icon="🏙️"
              title="Investment Intelligence"
              description="Access climate-adjusted valuations for real estate and ESG investments."
            />
            <FeatureCard
              icon="🛰️"
              title="Orbital Safety"
              description="Forecast space debris, solar storms, and radiation zones for satellite operators."
            />
          </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 text-center pb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">
            Ready to Build a Climate-Informed Future?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Partner with us to turn orbital data into a strategic advantage.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-amber text-navy font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal"
          >
            Get in Touch
          </NavLink>
      </section>
    </div>
  );
};

export default HomePage;
