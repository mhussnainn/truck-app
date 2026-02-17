'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Truck,
  BarChart3,
  Clock,
  Shield,
  TrendingUp,
  FileText,
  Phone,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const fleetServices = [
  {
    icon: Truck,
    title: 'Fleet Maintenance',
    description:
      'Comprehensive preventive maintenance programs tailored to your fleet size and needs',
    features: ['Scheduled inspections', 'Oil changes', 'Tire rotations', 'Battery service'],
  },
  {
    icon: BarChart3,
    title: 'Fleet Analytics',
    description:
      'Track vehicle performance and maintenance history in real-time',
    features: ['Usage reports', 'Fuel tracking', 'Maintenance schedules', 'Cost analysis'],
  },
  {
    icon: Shield,
    title: 'Emergency Support',
    description:
      '24/7 roadside assistance and emergency repairs for your entire fleet',
    features: ['Quick response', 'Mobile repairs', 'Towing services', 'Priority support'],
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization',
    description:
      'Reduce operational costs with our smart maintenance planning',
    features: ['Discount pricing', 'Bulk services', 'Warranty coverage', 'Transparent billing'],
  },
];

export default function FleetServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - slides in from top
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 50%',
            scrub: 1.5,
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'top 40%',
            scrub: 1.5,
          },
        }
      );

      // Service cards - staggered animation with rotation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.8,
            rotationY: -90,
            x: index % 2 === 0 ? -150 : 150,
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            x: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'center 30%',
              scrub: 1.5,
            },
          }
        );

        // Hover animations with you effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.08,
            y: -15,
            duration: 0.3,
            overwrite: 'auto',
          });
          gsap.to(card, {
            boxShadow: [
              '0 10px 30px rgba(193, 18, 31, 0.2)',
              '0 0 0 30px rgba(193, 18, 31, 0)',
            ],
            duration: 0.6,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: '0 10px 30px rgba(193, 18, 31, 0.1)',
            duration: 0.3,
            overwrite: 'auto',
          });
        });
      });

      // CTA button animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'bottom 80%',
            end: 'bottom 60%',
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="fleet"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Fleet <span className="text-primary">Management Services</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Complete fleet solutions designed to keep your trucks running and your costs down
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {fleetServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
                style={{
                  perspective: '1000px',
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing and CTA */}
        <div
          ref={ctaRef}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Optimize Your Fleet?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized fleet management solution. Get a free consultation and pricing quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call (559) 890-9173
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all">
              Get Free Quote
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            Available 24/7 • Fast Response • Professional Team
          </p>
        </div>
      </div>
    </section>
  );
}
