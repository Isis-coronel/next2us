
import React, { useState } from 'react';
// Fix: Corrected imports. Removed components defined locally or not used, and consolidated into one line.
import { LinkedInIcon, TwitterIcon, GitHubIcon } from '../components/IconComponents';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        organization: '',
        email: '',
        interest: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-20 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold">Let’s Build a More Resilient Future — Together.</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          We welcome collaborations with governments, investors, developers, insurers, and satellite operators who share our vision of data-driven climate resilience. Schedule a demo, request partnership access, or reach out for media inquiries.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-navy-light p-8 rounded-lg border border-teal/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <InputField label="Organization" name="organization" value={formData.organization} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">Interested in</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-navy border border-gray-600 rounded-md py-2 px-3 text-light focus:outline-none focus:ring-2 focus:ring-teal"
              >
                <option>Investment</option>
                <option>Pilot</option>
                <option>API Access</option>
                <option>General Inquiry</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-navy border border-gray-600 rounded-md py-2 px-3 text-light focus:outline-none focus:ring-2 focus:ring-teal"
              ></textarea>
            </div>
            
            <div>
              <button type="submit" className="w-full bg-teal text-navy font-bold py-3 px-6 rounded-md transition-colors hover:bg-amber">
                Send Message
              </button>
            </div>
            {status && <p className={`text-center ${status.includes('successfully') ? 'text-teal' : 'text-amber'}`}>{status}</p>}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <InfoBlock icon={<LocationMarkerIcon />} text="Based in California | Operating Globally" />
          <InfoBlock icon={<MailIcon />} text={<a href="mailto:contact@nex2us.io" className="hover:text-teal transition-colors">contact@nex2us.io</a>} />
          <div className="bg-navy-light p-8 rounded-lg border border-teal/20">
            <h3 className="text-2xl font-display font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal transition-colors"><LinkedInIcon /></a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors"><GitHubIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ label, name, type = 'text', value, onChange, required = false }: { label: string, name: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-navy border border-gray-600 rounded-md py-2 px-3 text-light focus:outline-none focus:ring-2 focus:ring-teal"
    />
  </div>
);

const InfoBlock = ({ icon, text }: { icon: React.ReactNode, text: React.ReactNode }) => (
  <div className="flex items-center space-x-4 bg-navy-light p-6 rounded-lg border border-teal/20">
    <div className="text-teal">{icon}</div>
    <p className="text-lg text-light">{text}</p>
  </div>
);

const LocationMarkerIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MailIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;