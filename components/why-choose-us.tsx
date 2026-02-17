'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Clock,
  Award,
  Zap,
  Hammer,
  DollarSign,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock service when you need it most' },
  { icon: Award, title: 'Certified Mechanics', description: 'ASE-certified professionals with years of experience' },
  { icon: Zap, title: 'Fast Response Time', description: 'Quick dispatch and arrival at your location' },
  { icon: Hammer, title: 'Heavy-Duty Specialists', description: 'Experts in all types of truck repairs' },
  { icon: DollarSign, title: 'Transparent Pricing', description: 'No hidden fees, upfront honest quotes' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        sectionRef.current?.querySelector('h2'),
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

      // Image slides in from left with reversible scroll
      gsap.fromTo(
        imageRef.current,
        { x: -200, opacity: 0, scale: 0.8, rotateY: -30 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'center 40%',
            scrub: 1.5,
            toggleActions: 'play pause resume pause',
          },
          ease: 'power3.out',
        }
      );

      // Text slides in from right with reversible scroll
      gsap.fromTo(
        textRef.current,
        { x: 200, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'center 40%',
            scrub: 1.5,
            toggleActions: 'play pause resume pause',
          },
          ease: 'power3.out',
        }
      );

      // Bullets staggered reveal with you effect
      gsap.fromTo(
        bulletsRef.current.filter(Boolean),
        { x: 50, opacity: 0, rotateX: -20 },
        {
          x: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'center 40%',
            scrub: 1.5,
            toggleActions: 'play pause resume pause',
          },
          ease: 'power2.out',
        }
      );

      // Bullet hover animations
      bulletsRef.current.forEach((bullet) => {
        if (!bullet) return;

        bullet.addEventListener('mouseenter', () => {
          gsap.to(bullet, {
            scale: 1.08,
            x: 10,
            duration: 0.3,
            overwrite: 'auto',
          });
          gsap.to(bullet, {
            boxShadow: [
              '0 0 0 0 rgba(193, 18, 31, 0.7)',
              '0 0 0 20px rgba(193, 18, 31, 0)',
            ],
            duration: 0.6,
            ease: 'power2.out',
          });
        });

        bullet.addEventListener('mouseleave', () => {
          gsap.to(bullet, {
            scale: 1,
            x: 0,
            boxShadow: 'none',
            duration: 0.3,
            overwrite: 'auto',
          });
        });
      });

      // Image hover effect
      if (imageRef.current) {
        imageRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, {
            scale: 1.05,
            duration: 0.3,
            overwrite: 'auto',
          });
          gsap.to(imageRef.current, {
            boxShadow: '0 30px 60px rgba(193, 18, 31, 0.4)',
            duration: 0.3,
          });
        });

        imageRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, {
            scale: 1,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            overwrite: 'auto',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white">
              <div className="text-center">
                <Hammer className="w-20 h-20 mx-auto mb-4" />
                <p className="text-lg">Professional Truck Repair</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={textRef}>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Why Choose DH Truck Repairing?
            </h2>

            <div className="space-y-4">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      if (el) bulletsRef.current[idx] = el;
                    }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
              Get Emergency Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
