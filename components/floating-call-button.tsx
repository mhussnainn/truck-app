'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pulseRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Floating animation - smooth wave motion
    gsap.to(button, {
      y: -10,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    // Rotation animation
    gsap.to(button, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    // Pulse glow with you effect
    const pulseTimeline = gsap.timeline({ repeat: -1 });
    pulseTimeline
      .to(
        button,
        {
          boxShadow: [
            '0 0 20px rgba(193, 18, 31, 0.3)',
            '0 0 40px rgba(193, 18, 31, 0.6)',
          ],
          duration: 1.5,
          ease: 'sine.inOut',
        },
        0
      )
      .to(
        button,
        {
          boxShadow: '0 0 10px rgba(193, 18, 31, 0.2)',
          duration: 1.5,
          ease: 'sine.inOut',
        },
        0
      );

    // Hover animations with you effect
    const handleMouseEnter = () => {
      const tl = gsap.timeline();
      
      tl.to(
        button,
        {
          scale: 1.2,
          duration: 0.2,
          ease: 'back.out(1.7)',
          overwrite: 'auto',
        },
        0
      )
      .to(
        button,
        {
          boxShadow: [
            '0 0 0 0 rgba(193, 18, 31, 0.8)',
            '0 0 0 40px rgba(193, 18, 31, 0)',
          ],
          duration: 0.6,
          ease: 'power2.out',
        },
        0
      );
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: 'back.out(1.7)',
        overwrite: 'auto',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold text-sm"
        aria-label="Call emergency hotline"
        onClick={() => window.location.href = 'tel:1-800-8782569'}
        title="Click to call - Available 24/7"
      >
        <Phone className="w-7 h-7 animate-bounce" />
      </button>

      {/* Pulse ring effect */}
      <div
        ref={pulseRingRef}
        className="fixed bottom-8 right-8 z-30 w-16 h-16 rounded-full border-2 border-primary opacity-40 pointer-events-none"
        style={{
          animation: 'pulse 2s infinite',
        }}
      />
    </>
  );
}
