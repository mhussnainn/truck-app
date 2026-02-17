'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const callButtonRef = useRef<HTMLButtonElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#fleet', label: 'Fleet Services' },
    { href: '#contact', label: 'Contact' },
  ];

  // Animate dropdown open/close
  useEffect(() => {
    if (!dropdownRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

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
    gsap.to(link, { y: -5, duration: 0.2, ease: 'power1.out' });
    gsap.to(link, { color: '#a00e18', duration: 0.3, ease: 'power1.out' });
  };

  const handleMouseLeave = (index: number) => {
    const link = linksRef.current[index];
    if (!link) return;
    gsap.to(link, { y: 0, duration: 0.2, ease: 'power1.out' });
    gsap.to(link, { color: '#C1121F', duration: 0.3, ease: 'power1.out' });
  };

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white overflow-x-hidden"
        style={{ height: 80 }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo — company name always visible */}
          <Link href="/" className="flex items-center group">
            <div ref={logoRef}>
              <Image
                src="/Truck-logo.jpeg"
                alt="DH Truck Logo"
                width={400}
                height={56}
                className="object-fill h-14 w-auto"
                priority
              />
            </div>
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
              className="bg-[#C1121F] text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2 shadow-md hover:bg-[#a00e18] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-red-50 transition-colors duration-200"
            onClick={handleToggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="text-[#C1121F] w-6 h-6" />
            ) : (
              <Menu className="text-[#C1121F] w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Overlay — rendered outside nav so it floats freely */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown panel */}
          <div
            ref={dropdownRef}
            className="fixed top-[80px] left-4 right-4 z-50 lg:hidden bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header inside dropdown */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100 bg-red-50">
              <div className="w-8 h-8 bg-[#C1121F] rounded-full flex items-center justify-center">
                <Wrench className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-[#C1121F] text-lg">DH Truck</span>
            </div>

            {/* Links */}
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-red-50 hover:text-[#C1121F] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <button
                className="w-full bg-[#C1121F] text-white py-3 rounded-md font-semibold shadow-md flex items-center justify-center gap-2 hover:bg-[#a00e18] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}