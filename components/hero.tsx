'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Clock, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const callButtonRef = useRef<HTMLButtonElement>(null);
  const requestButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth background image fade using opacity
      gsap.to(bg2Ref.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Overlay darkens slightly on scroll
      gsap.to(overlayRef.current, {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Content wrapper fade in
      gsap.from(contentWrapperRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Text animations
      gsap.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from(subheadingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.35,
      });

      gsap.from(callButtonRef.current, {
        x: -60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.5,
      });

      gsap.from(requestButtonRef.current, {
        x: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.6,
      });

      // Scroll text move effect
      gsap.to('.hero-text', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 2,
        },
        y: -120,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const applyYouEffect = (button: HTMLButtonElement) => {
    gsap.to(button, { scale: 1.1, duration: 0.15 });
    gsap.fromTo(
      button,
      { boxShadow: '0 0 0 0 rgba(255,255,255,0.6)' },
      {
        boxShadow: '0 0 0 30px rgba(255,255,255,0)',
        duration: 0.6,
      }
    );
  };

  const resetYouEffect = (button: HTMLButtonElement) => {
    gsap.to(button, { scale: 1, duration: 0.15 });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden pt-20"
      id="home"
    >
      {/* Background layers */}
      <div
        ref={bg1Ref}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: 'url(/hero-truck-1.jpg)', zIndex: 0 }}
      />
      <div
        ref={bg2Ref}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform opacity-0 transition-opacity"
        style={{ backgroundImage: 'url(/hero-truck-2.jpg)', zIndex: 1 }}
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/30 transition-colors z-2"
      />

      {/* Content */}
      <div
        ref={contentWrapperRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center text-white overflow-x-hidden"
      >
        <div className="hero-text space-y-8">
          <h1
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
          >
            24/7 Emergency
            <span className="block text-yellow-300">Truck & Trailer</span>
            <span className="block text-yellow-300">Repair Service</span>
          </h1>

          <p
            ref={subheadingRef}
            className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            Professional roadside assistance, heavy-duty repairs, and fleet services. Certified mechanics ready 24/7.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 py-6 bg-black/40 backdrop-blur-sm rounded-lg">
            <div>
              <p className="text-yellow-300 font-bold text-lg">Call Now</p>
              <p className="text-white text-sm">(559) 890-9173</p>
            </div>
            <div>
              <p className="text-yellow-300 font-bold text-lg">Open</p>
              <p className="text-white text-sm">24/7 Service</p>
            </div>
            <div>
              <p className="text-yellow-300 font-bold text-lg">Location</p>
              <p className="text-white text-sm">Fresno, CA</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-6">
            <button
              ref={callButtonRef}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-lg flex items-center gap-2 shadow-2xl transition-all duration-300 whitespace-nowrap"
              onMouseEnter={(e) => applyYouEffect(e.currentTarget)}
              onMouseLeave={(e) => resetYouEffect(e.currentTarget)}
            >
              <Phone className="w-6 h-6" />
              Call Now
            </button>

            <button
              ref={requestButtonRef}
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              onMouseEnter={(e) => applyYouEffect(e.currentTarget)}
              onMouseLeave={(e) => resetYouEffect(e.currentTarget)}
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Request Service
            </button>
          </div>

          <div className="flex items-center gap-2 justify-center text-yellow-300 pt-4">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Fast Response • Professional Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
