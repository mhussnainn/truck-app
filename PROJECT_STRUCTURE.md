# DH Truck Repairing - Project Structure

## Directory Layout

```
dh-truck-repairing/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles & theme variables
│   └── page.tsx                # Main page (all sections)
│
├── components/
│   ├── navbar.tsx              # Sticky navigation with animations
│   ├── hero.tsx                # Hero section with parallax
│   ├── services.tsx            # Service cards grid
│   ├── why-choose-us.tsx       # Features & benefits section
│   ├── emergency-banner.tsx    # CTA emergency banner
│   ├── process.tsx             # 3-step timeline
│   ├── testimonials.tsx        # Customer testimonials carousel
│   ├── service-area.tsx        # Service coverage area
│   ├── contact-cta.tsx         # Contact form & info
│   ├── footer.tsx              # Footer with links
│   └── floating-call-button.tsx # Always-visible call button
│
├── public/
│   ├── truck-repair.jpg        # Generated truck image
│   ├── icon.svg                # Favicon
│   ├── icon-light-32x32.png    # Light theme icon
│   └── icon-dark-32x32.png     # Dark theme icon
│
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS config
├── next.config.mjs             # Next.js configuration
├── README.md                   # Main documentation
├── ANIMATION_GUIDE.md          # Detailed GSAP animation guide
└── PROJECT_STRUCTURE.md        # This file

```

## Component Hierarchy

```
Page (app/page.tsx)
├── Navbar
│   ├── Logo
│   ├── Desktop Menu Links
│   ├── Desktop CTA Button
│   └── Mobile Menu (Hamburger)
│
├── Hero
│   ├── Background Image with Overlay
│   ├── Main Heading
│   ├── Subheading
│   ├── CTA Buttons (Call Now, Request Service)
│   └── Quick Info Display
│
├── Services
│   └── Service Cards Grid (6 cards)
│       ├── Roadside Assistance
│       ├── Engine Diagnostics
│       ├── Trailer Repair
│       ├── Tire Replacement
│       ├── Mobile Mechanic
│       └── Fleet Maintenance
│
├── WhyChooseUs
│   ├── Featured Image
│   └── Feature List (5 items)
│       ├── 24/7 Availability
│       ├── Certified Mechanics
│       ├── Fast Response Time
│       ├── Heavy-Duty Specialists
│       └── Transparent Pricing
│
├── EmergencyBanner
│   ├── Banner Title
│   ├── Banner Description
│   ├── CTA Button
│   └── Animated Background Elements
│
├── Process
│   ├── Section Title
│   └── Timeline (3 steps)
│       ├── Step 1: Call Us
│       ├── Step 2: We Dispatch
│       └── Step 3: Truck Fixed
│
├── Testimonials
│   ├── Section Title
│   └── Carousel
│       ├── Star Rating Display
│       ├── Customer Quote
│       ├── Customer Info
│       ├── Navigation Buttons
│       └── Dot Indicators
│
├── ServiceArea
│   ├── Map Placeholder
│   ├── Coverage Info
│   └── Service Coverage List
│
├── ContactCTA
│   ├── Contact Form
│   │   ├── Name Inputs
│   │   ├── Phone Input
│   │   ├── Location Input
│   │   ├── Issue Textarea
│   │   └── Submit Button
│   ├── Emergency Hotline
│   ├── Service Hours
│   └── Alert Box
│
├── Footer
│   ├── Logo & Description
│   ├── Quick Links
│   ├── Services Links
│   ├── Contact Info
│   ├── Copyright
│   └── Social Icons
│
└── FloatingCallButton
    └── Phone Icon Button (Fixed Position)
```

## File Descriptions

### Core Application Files

**app/layout.tsx**
- Root layout configuration
- Metadata for SEO (title, description, icons)
- Font imports (Geist, Bebas Neue)
- Analytics integration

**app/globals.css**
- CSS variables for theme colors
- GSAP animation utility classes
- Tailwind configuration
- Keyframe animations (blob, slide-in, fade-up, pulse-glow)
- Smooth scroll behavior

**app/page.tsx**
- Main page component
- Imports and arranges all section components
- Root of the application

### Component Files

**components/navbar.tsx** (143 lines)
- Fixed sticky navigation
- Shrinks on scroll
- Mobile responsive hamburger menu
- Link hover animations
- CTA button

**components/hero.tsx** (113 lines)
- Full-screen hero section
- Heading slide-in animation
- Subheading fade-up animation
- Button scale-in with spring easing
- Background parallax effect
- Quick info display

**components/services.tsx** (144 lines)
- 6 service cards in responsive grid
- Card fade-up stagger animation
- Hover scale and glow effects
- Icon integration (Lucide)
- Service descriptions

**components/why-choose-us.tsx** (147 lines)
- Split layout with image and text
- Image slide-in from left
- Text slide-in from right
- Feature list with staggered animation
- Icon integration
- CTA button

**components/emergency-banner.tsx** (83 lines)
- Full-width red banner
- Banner slide-up animation
- Pulsing button glow effect
- Animated background blob elements
- Emergency messaging

**components/process.tsx** (137 lines)
- 3-step timeline layout
- Sequential step animations
- Connector line scale animation
- Circular step indicators
- Numbered badges

**components/testimonials.tsx** (166 lines)
- Customer testimonial carousel
- Navigation buttons (prev/next)
- Dot indicators
- Star rating display
- Smooth fade and slide transitions
- Quote formatting

**components/service-area.tsx** (107 lines)
- Two-column layout
- Map placeholder with zoom animation
- Service coverage description
- Feature list with icons
- CTA button

**components/contact-cta.tsx** (232 lines)
- Contact form with validation
- Phone number pulsing animation
- Form field staggered animation
- Emergency hotline display
- Service hours information
- Alert box for immediate help

**components/footer.tsx** (160 lines)
- Multi-column layout
- Logo and branding
- Quick links
- Services links
- Contact information
- Social media icons
- Copyright and fade-in animation

**components/floating-call-button.tsx** (84 lines)
- Fixed position button
- Continuous floating animation
- Pulsing glow effect
- Hover scale animation
- Direct phone call link

## Key Technologies

### Framework
- **Next.js 16**: Server & client-side rendering
- **React 19.2**: UI library
- **TypeScript**: Type safety

### Styling
- **Tailwind CSS 4**: Utility-first CSS
- **CSS Variables**: Custom theme colors
- **GSAP**: Smooth animations

### Animation
- **GSAP 3.12**: Animation library
- **ScrollTrigger**: Scroll-based animations
- **Timeline**: Complex animation sequences

### Icons & Components
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built components

## Dependencies Overview

### Production Dependencies
```json
{
  "gsap": "^3.12.2",           // Animation library
  "next": "16.1.6",            // Framework
  "react": "19.2.4",           // UI library
  "lucide-react": "^0.564.0",  // Icons
  "tailwindcss": "^4.1.9"      // Styling
}
```

### Development Dependencies
- TypeScript
- Tailwind CSS PostCSS
- ESLint

## Configuration Files

**tailwind.config.ts**
- Tailwind CSS theme configuration
- Custom color tokens
- Font family setup

**next.config.mjs**
- Next.js build configuration
- Image optimization
- Module aliases

**tsconfig.json**
- TypeScript compiler options
- Path aliases (@/)
- Strict type checking

**package.json**
- Project metadata
- Scripts (dev, build, start, lint)
- All dependencies with versions

## Styling Architecture

### Color System (globals.css)
```css
--primary: #C1121F;        /* Main brand red */
--foreground: #1a1a1a;     /* Text color */
--background: #FFFFFF;     /* Background */
--accent: #C1121F;         /* Accent red */
--muted: #f5f5f5;          /* Light gray */
```

### Component Patterns
- All components use Tailwind utility classes
- Semantic HTML elements
- ARIA labels for accessibility
- Mobile-first responsive design

## Animation Framework

### GSAP Integration Pattern
```javascript
// Every component using animations follows this pattern:
const componentRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Animation code here
  }, componentRef);
  
  return () => ctx.revert(); // Cleanup
}, []);
```

### ScrollTrigger Pattern
```javascript
gsap.fromTo(element, {...}, {
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reverse'
  }
})
```

## Performance Considerations

1. **Code Splitting**: Each component is a separate file
2. **Lazy Loading**: Components imported on demand
3. **Image Optimization**: Images handled by Next.js
4. **Animation Performance**: Using transform and opacity
5. **Scroll Optimization**: ScrollTrigger batches scroll events

## Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted servers

## Development Workflow

1. **Development**: `pnpm dev` - Hot module reloading
2. **Building**: `pnpm build` - Production optimization
3. **Production**: `pnpm start` - Run built application
4. **Linting**: `pnpm lint` - Code quality checks

---

**Total Files**: 22
**Total Lines of Code**: ~2,500+
**Components**: 11
**Pages**: 1
**Styles**: Tailwind CSS + Custom CSS
**Animations**: 50+ GSAP animations

---

Created with ❤️ using Next.js, GSAP, and Tailwind CSS
