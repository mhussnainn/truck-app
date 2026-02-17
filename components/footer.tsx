'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wrench, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
          ease: 'power3.out',
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Fleet Services', href: '#fleet' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer ref={footerRef} className="bg-foreground text-white py-16">
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Wrench className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg">DH Truck Trailer Repair</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional truck repair and emergency roadside assistance available 24/7 nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Roadside Assistance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Engine Diagnostics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trailer Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Fleet Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                <strong className="text-white">Phone:</strong>
                <a
                  href="tel:5598909173"
                  className="block hover:text-primary transition-colors font-semibold"
                >
                  (559) 890-9173
                </a>
              </p>
              <p>
                <strong className="text-white">Address:</strong>
                <span className="block">7732 E Olive Ave</span>
                <span className="block">Fresno, CA 93737</span>
              </p>
              <p>
                <strong className="text-white">Hours:</strong>
                <span className="block">24/7 Available</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2024 DH Truck Repairing. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
