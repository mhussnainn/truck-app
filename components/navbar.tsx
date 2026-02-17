'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Wrench, Phone } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const callButtonRef = useRef<HTMLButtonElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#fleet', label: 'Fleet Services' },
    { href: '#contact', label: 'Contact' },
  ];

  // Initial GSAP animation for logo, links, and CTA
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([logoRef.current, ...linksRef.current, callButtonRef.current], {
        y: -30,
        opacity: 0,
      });

      gsap.to([logoRef.current, ...linksRef.current, callButtonRef.current], {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.1,
      });

      // Navbar scroll effect
      gsap.fromTo(
        navRef.current,
        {
          height: 80,
          backgroundColor: 'white',
          boxShadow: '0 0 0 rgba(0,0,0,0)',
        },
        {
          height: 60,
          backgroundColor: 'white',
          boxShadow: '0 4px 20px rgba(193,18,31,0.25)',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: '+=120',
            scrub: true,
          },
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // GSAP hover effect for desktop links
  const handleMouseEnter = (index: number) => {
    const link = linksRef.current[index];
    if (!link) return;

    // Animate this link and optionally all previous ones in stagger
    gsap.to(link, { y: -5, duration: 0.2, ease: 'power1.out' });
    gsap.to(link, {
      color: '#C1121F',
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = (index: number) => {
    const link = linksRef.current[index];
    if (!link) return;

    gsap.to(link, { y: 0, duration: 0.2, ease: 'power1.out' });
    gsap.to(link, {
      color: '#C1121F',
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl overflow-x-hidden"
      style={{ height: 80 }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            ref={logoRef}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
          >
            <Wrench className="text-[#C1121F] w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-[#C1121F] hidden sm:inline">
            DH Truck
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className="relative font-medium text-[#C1121F] transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            ref={callButtonRef}
            className="bg-[#C1121F] text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2 shadow-md"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-white/10"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="text-[#C1121F]" /> : <Menu className="text-[#C1121F]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white px-6 py-8 space-y-6 rounded-b-md shadow-lg z-50">
          <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
            <div className="w-8 h-8 bg-[#C1121F] rounded-full flex items-center justify-center">
              <Wrench className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-[#C1121F] text-lg">DH Truck</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-medium text-[#333] hover:text-[#C1121F] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button className="w-full bg-[#C1121F] text-white py-3 rounded-md font-semibold shadow-md">
            Call Now
          </button>
        </div>
      )}
    </nav>
  );
}
