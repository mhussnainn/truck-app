'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EmergencyBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner slides up
      gsap.fromTo(
        bannerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
          ease: 'power3.out',
        }
      );

      // Pulse animation on button
      const pulseTimeline = gsap.timeline({ repeat: -1 });
      pulseTimeline.to(buttonRef.current, {
        boxShadow: '0 0 40px rgba(255, 255, 255, 0.8)',
        duration: 1,
        ease: 'sine.inOut',
      }).to(
        buttonRef.current,
        {
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)',
          duration: 1,
          ease: 'sine.inOut',
        },
        0
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="relative py-16 bg-primary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2s" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="w-8 h-8 text-white" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Stranded on the Road?
          </h2>
        </div>

        <p className="text-xl text-gray-100 mb-8">
          We're On Our Way! Fast, reliable emergency truck repair services available now.
        </p>

        <button
          ref={buttonRef}
          className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Get Emergency Help Now
        </button>
      </div>
    </section>
  );
}
