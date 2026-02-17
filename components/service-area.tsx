'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceArea() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image zoom in
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
          ease: 'power3.out',
        }
      );

      // Text fade in
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=50',
            toggleActions: 'play none none reverse',
          },
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div
            ref={imageRef}
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold">Service Area Map</p>
                <p className="text-sm mt-2">Available nationwide for emergency repairs</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={textRef}>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Serving Nationwide
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Serving highways, depots, and roadside breakdowns nationwide. Our fleet of mobile repair units covers:
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Interstate corridors across North America',
                'Major trucking hubs and distribution centers',
                'Remote roadside locations 24/7',
                'Urban and rural service areas',
                'Nationwide fleet management contracts',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
              Check Service Area
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
