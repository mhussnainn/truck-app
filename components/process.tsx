'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Truck, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Contact us with details about your truck issue',
    number: '01',
  },
  {
    icon: Truck,
    title: 'We Dispatch',
    description: 'Our team gets dispatched to your location immediately',
    number: '02',
  },
  {
    icon: CheckCircle2,
    title: 'Truck Fixed',
    description: 'Fast professional repairs to get you back on the road',
    number: '03',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Steps animate in sequence with scroll reversibility
      stepsRef.current.forEach((step, idx) => {
        if (!step) return;
        
        // Horizontal scroll animation - reversible
        gsap.fromTo(
          step,
          { x: idx % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.8 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: idx * 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'top 30%',
              scrub: 1.5, // Reversible on scroll-back
              toggleActions: 'play pause resume pause',
            },
            ease: 'power3.out',
          }
        );

        // Circle icon rotation on hover
        const circle = step.querySelector('[class*="rounded-full"]') as HTMLElement;
        if (circle) {
          step.addEventListener('mouseenter', () => {
            gsap.to(circle, {
              rotation: 360,
              duration: 0.6,
              ease: 'back.out',
            });
            
            // You effect
            gsap.to(step, {
              scale: 1.05,
              duration: 0.2,
              overwrite: 'auto',
            });
            
            gsap.to(step, {
              boxShadow: [
                '0 0 0 0 rgba(193, 18, 31, 0.7)',
                '0 0 0 25px rgba(193, 18, 31, 0)',
              ],
              duration: 0.6,
              ease: 'power2.out',
            });
          });

          step.addEventListener('mouseleave', () => {
            gsap.to(step, {
              scale: 1,
              duration: 0.2,
              overwrite: 'auto',
            });
          });
        }
      });

      // Connector line animation - reversible with scrub
      gsap.fromTo(
        connectorRef.current,
        { scaleX: 0, transformOrigin: 'left', opacity: 0.5 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1.5, // Reversible on scroll-back
            toggleActions: 'play pause resume pause',
          },
          ease: 'power2.inOut',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple, fast, and professional truck repair process
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div
            ref={connectorRef}
            className="absolute top-20 left-0 right-0 h-1 bg-primary hidden md:block"
            style={{ width: 'calc(100% - 5rem)', left: '2.5rem' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) stepsRef.current[idx] = el;
                  }}
                  className="relative"
                >
                  {/* Circle */}
                  <div className="flex items-center justify-center mb-6 relative z-10">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white text-primary font-bold flex items-center justify-center text-sm border-4 border-primary">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
