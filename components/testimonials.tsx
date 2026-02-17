'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'John Davis',
    city: 'Chicago, IL',
    rating: 5,
    quote:
      'Called DH at midnight with a broken transmission. They arrived in 20 minutes and had me back on the road in 2 hours. Absolutely professional!',
  },
  {
    name: 'Sarah Martinez',
    city: 'Denver, CO',
    rating: 5,
    quote:
      'Best truck repair service I\'ve used in 10 years of hauling. Fair prices, expert mechanics, and they actually explain what\'s wrong with your truck.',
  },
  {
    name: 'Mike Thompson',
    city: 'Austin, TX',
    rating: 5,
    quote:
      'Emergency roadside repair saved my entire delivery schedule. These guys are lifesavers. Highly recommend for any truck owner.',
  },
  {
    name: 'Linda Rodriguez',
    city: 'Phoenix, AZ',
    rating: 5,
    quote:
      'Fleet maintenance contracts have saved us thousands. DH takes care of all our trucks with precision and reliability.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation with reversible scroll
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
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

      // Carousel background animation
      gsap.fromTo(
        carouselRef.current,
        { boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' },
        {
          boxShadow: '0 20px 60px rgba(193, 18, 31, 0.15)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate card change with horizontal scroll effect
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [current]);

  // You effect on buttons
  const applyYouEffect = (button: HTMLButtonElement) => {
    const tl = gsap.timeline();
    tl.to(button, {
      scale: 1.15,
      duration: 0.2,
      overwrite: 'auto',
    }).to(
      button,
      {
        boxShadow: [
          '0 0 0 0 rgba(193, 18, 31, 0.7)',
          '0 0 0 25px rgba(193, 18, 31, 0)',
        ],
        duration: 0.6,
        ease: 'power2.out',
      },
      0
    );
  };

  const resetYouEffect = (button: HTMLButtonElement) => {
    gsap.to(button, {
      scale: 1,
      duration: 0.2,
      overwrite: 'auto',
    });
  };

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from truck owners who trust DH Truck Repairing
          </p>
        </div>

        <div
          ref={carouselRef}
          className="relative bg-white rounded-lg shadow-xl p-8 sm:p-12"
        >
          <div
            ref={cardRef}
            className="text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl sm:text-2xl text-gray-700 italic mb-8 leading-relaxed">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div>
              <h3 className="font-bold text-lg text-foreground">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">{testimonial.city}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              ref={prevBtnRef}
              onClick={prev}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
              onMouseEnter={(e) => applyYouEffect(e.currentTarget)}
              onMouseLeave={(e) => resetYouEffect(e.currentTarget)}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              ref={nextBtnRef}
              onClick={next}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
              onMouseEnter={(e) => applyYouEffect(e.currentTarget)}
              onMouseLeave={(e) => resetYouEffect(e.currentTarget)}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
