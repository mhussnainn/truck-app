'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Clock, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    issue: '',
    location: '',
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form slides up with reversible scroll animation
      gsap.fromTo(
        formRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
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

      // Phone number pulses with you effect
      const pulseTimeline = gsap.timeline({ repeat: -1 });
      pulseTimeline
        .to(phoneRef.current, {
          textShadow: '0 0 20px rgba(193, 18, 31, 0.5)',
          scale: 1.05,
          duration: 1.5,
          ease: 'sine.inOut',
        })
        .to(
          phoneRef.current,
          {
            textShadow: '0 0 0px rgba(193, 18, 31, 0)',
            scale: 1,
            duration: 1.5,
            ease: 'sine.inOut',
          },
          0
        );

      // Animate form fields with staggered horizontal scroll
      gsap.fromTo(
        '.form-field',
        { x: -30, y: 20, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top center+=150',
            end: 'top center-50',
            scrub: 1,
            toggleActions: 'play pause resume pause',
          },
          ease: 'power2.out',
        }
      );

      // Info cards animation with you effect
      infoCardRef.current.forEach((card, idx) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { x: idx % 2 === 0 ? 100 : -100, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: idx * 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'center center',
              scrub: 1.5,
              toggleActions: 'play pause resume pause',
            },
            ease: 'power3.out',
          }
        );

        // You effect on hover
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.2,
            overwrite: 'auto',
          });
          
          gsap.to(card, {
            boxShadow: [
              '0 10px 25px rgba(0, 0, 0, 0.1)',
              '0 0 0 20px rgba(193, 18, 31, 0)',
            ],
            duration: 0.6,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            duration: 0.2,
            overwrite: 'auto',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Request Service
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within the hour.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-field w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-field w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-field w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                required
              />

              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                className="form-field w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                required
              />

              <textarea
                name="issue"
                placeholder="Describe your truck issue"
                value={formData.issue}
                onChange={handleChange}
                rows={4}
                className="form-field w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 resize-none"
                required
              />

              <button
                type="submit"
                className="form-field w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                Request Service
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div
              ref={(el) => {
                if (el) infoCardRef.current[0] = el;
              }}
              className="bg-white rounded-lg p-8 shadow-lg cursor-pointer transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Emergency Hotline
                  </h3>
                  <p
                    ref={phoneRef}
                    className="text-3xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    (559) 890-9173
                  </p>
                  <p className="text-gray-600 mt-2">Available 24/7 | Fast Response</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              ref={(el) => {
                if (el) infoCardRef.current[1] = el;
              }}
              className="bg-white rounded-lg p-8 shadow-lg cursor-pointer transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Service Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Monday - Sunday:</strong> 24 Hours
                    </p>
                    <p>
                      <strong>Emergency:</strong> Always Available
                    </p>
                    <p className="text-sm mt-3">
                      Response time: 15-30 minutes average
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div
              ref={(el) => {
                if (el) infoCardRef.current[2] = el;
              }}
              className="bg-white rounded-lg p-8 shadow-lg cursor-pointer transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-700 font-semibold">
                    7732 E Olive Ave
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Fresno, CA 93737
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Open 24/7 for emergencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
