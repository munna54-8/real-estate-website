import React from 'react';
import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Services from './components/Services';
import PropertyListings from './components/PropertyListings';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';
import GoogleMap from './components/GoogleMap';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <About />
      <Services />
      <PropertyListings />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      <GoogleMap />
      <WhatsAppButton />
    </div>
  );
};

export default App;