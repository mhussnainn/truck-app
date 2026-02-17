import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';
import FleetServices from '@/components/fleet-services';
import EmergencyBanner from '@/components/emergency-banner';
import Process from '@/components/process';
import Testimonials from '@/components/testimonials';
import ServiceArea from '@/components/service-area';
import ContactCTA from '@/components/contact-cta';
import Footer from '@/components/footer';
import FloatingCallButton from '@/components/floating-call-button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FleetServices />
      <EmergencyBanner />
      <Process />
      <Testimonials />
      <ServiceArea />
      <ContactCTA />
      <Footer />
      <FloatingCallButton />
    </main>
  );
}
