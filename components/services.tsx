'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Wrench,
  AlertTriangle,
  Truck,
  Zap,
  Navigation,
  Settings,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: AlertTriangle,
    title: 'Roadside Assistance',
    description: 'Quick response to get you back on the road safely',
  },
  {
    icon: Zap,
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostics to identify issues quickly',
  },
  {
    icon: Truck,
    title: 'Trailer Repair',
    description: 'Complete trailer repair and maintenance services',
  },
  {
    icon: Navigation,
    title: 'Tire Replacement',
    description: 'Professional tire services for all truck types',
  },
  {
    icon: Wrench,
    title: 'Mobile Mechanic',
    description: 'On-site repairs at your location or garage',
  },
  {
    icon: Settings,
    title: 'Fleet Maintenance',
    description: 'Preventive maintenance programs for your fleet',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        sectionRef.current?.querySelector('h2'),
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 50%',
            scrub: 1.5,
          },
        }
      );

      // Scroll-reversible animation with scrub
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { y: 100, opacity: 0, scale: 0.85, rotateX: -20 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'center 40%',
            scrub: 1.5, // Reversible on scroll-back
            toggleActions: 'play pause resume pause',
          },
          ease: 'power3.out',
        }
      );

      // Hover effect with you effect style animations
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Background color animation on scroll
        gsap.fromTo(
          card,
          { backgroundColor: 'rgb(255, 255, 255)' },
          {
            backgroundColor: 'rgba(193, 18, 31, 0.05)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'center 35%',
              scrub: 1.5,
            },
          }
        );

        // Border animation on scroll
        gsap.fromTo(
          card,
          { borderColor: 'rgb(229, 231, 235)' },
          {
            borderColor: 'rgb(193, 18, 31)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'center 35%',
              scrub: 1.5,
            },
          }
        );

        card.addEventListener('mouseenter', () => {
          const tl = gsap.timeline();

          // You effect - scale and glow with expansion
          tl.to(
            card,
            {
              scale: 1.12,
              duration: 0.2,
              overwrite: 'auto',
            },
            0
          ).to(
            card,
            {
              boxShadow: [
                '0 4px 15px rgba(193, 18, 31, 0.2)',
                '0 0 0 25px rgba(193, 18, 31, 0)',
              ],
              duration: 0.6,
              ease: 'power2.out',
            },
            0
          );

          // Icon animation
          const icon = card.querySelector('svg');
          if (icon) {
            gsap.to(icon, {
              rotation: 360,
              duration: 0.6,
              ease: 'back.out',
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive truck repair solutions designed for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary transition-all duration-300 cursor-pointer shadow-md"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-50 mb-6 group-hover:bg-primary/10">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
