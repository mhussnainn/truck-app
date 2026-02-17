# DH Truck Repairing - Modern Truck Repair Service Website

A modern, professional website for **DH Truck Repairing** featuring 24/7 emergency truck and trailer repair services. Built with Next.js, Tailwind CSS, and GSAP animations for a smooth, engaging user experience.

## 🚀 Features

### 🎨 Design & Branding
- **Color Scheme**: Professional red (#C1121F) and white with dark gray accents
- **Typography**: Clean, modern fonts optimized for readability
- **Responsive**: Fully mobile-responsive design
- **Modern UI**: Industrial, trustworthy aesthetic

### ✨ GSAP Animations
- **Hero Section**: Heading slides from left, subheading fades up, buttons scale in with spring easing
- **Parallax Effects**: Background parallax on scroll
- **Service Cards**: Staggered fade-up animations on scroll with hover scale effects
- **Timeline Animations**: Sequential step animations for the process section
- **Testimonial Carousel**: Smooth fade and slide transitions
- **Floating Elements**: Floating call button with pulsing glow effect
- **Scroll Triggers**: All animations triggered by scroll position

### 📱 Pages & Sections

1. **Navbar** - Sticky navigation with smooth animations, mobile hamburger menu
2. **Hero Section** - Full-screen with CTA buttons and quick info
3. **Services** - Grid of 6 service cards (Roadside Assistance, Engine Diagnostics, etc.)
4. **Why Choose Us** - Feature highlights with icon list and CTA
5. **Emergency Banner** - Eye-catching banner with pulse animation
6. **Process** - 3-step timeline showing the service workflow
7. **Testimonials** - Customer carousel with star ratings
8. **Service Area** - Coverage information with map placeholder
9. **Contact CTA** - Contact form and emergency contact info
10. **Footer** - Links, social icons, and business information
11. **Floating Call Button** - Always-visible emergency call button with animations

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3 + ScrollTrigger
- **Icons**: Lucide React
- **Fonts**: Geist (body), Bebas Neue (headings)
- **UI Components**: shadcn/ui

## 📦 Installation

```bash
# Clone or download the project
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 🎯 Key Components

### Navbar (`components/navbar.tsx`)
- Sticky positioning that shrinks on scroll
- Desktop and mobile responsive menus
- Animated hover effects on links
- CTA button for emergency calls

### Hero (`components/hero.tsx`)
- Full-screen height section
- Animated text and buttons
- Parallax background effect
- Quick info display

### Services (`components/services.tsx`)
- 6 service cards in responsive grid
- Staggered fade-up animations
- Hover scale and glow effects
- Icons and descriptions

### EmergencyBanner (`components/emergency-banner.tsx`)
- Full-width red banner
- Pulsing button animation
- Animated background elements

### Testimonials (`components/testimonials.tsx`)
- Carousel slider with navigation
- Star ratings display
- Smooth transitions between testimonials
- Dot navigation indicators

### FloatingCallButton (`components/floating-call-button.tsx`)
- Fixed position with smooth floating animation
- Pulsing glow effect
- Hover scale animation
- Direct phone call link

## 🎬 Animation Details

### GSAP Features Used

1. **gsap.fromTo()** - Define animation start and end states
2. **ScrollTrigger** - Trigger animations based on scroll position
3. **Timelines** - Orchestrate complex multi-step animations
4. **Stagger** - Animate multiple elements in sequence
5. **Easing Functions**:
   - `power3.out` - Natural deceleration
   - `power2.out` - Smooth ease out
   - `back.out(1.7)` - Spring-like bounce
   - `sine.inOut` - Smooth sine wave

### Animation Types

- **Entrance**: Elements slide, fade, or scale in on page load
- **Scroll**: Triggered animations as user scrolls
- **Hover**: Interactive feedback on buttons and cards
- **Parallax**: Background moves slower than content
- **Looping**: Continuous animations like floating and pulsing

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Collapsing navbar menu on mobile
- Stacked layouts for smaller screens
- Readable text sizing across devices

## 🎨 Color System

```css
--primary: #C1121F;        /* DH Truck Red */
--foreground: #1a1a1a;     /* Dark Gray */
--background: #FFFFFF;     /* White */
--accent: #C1121F;         /* Red accent */
--muted: #f5f5f5;          /* Light gray */
```

## 📞 Contact & Services

- **Emergency Hotline**: 1-800-TRUCK-NOW
- **Hours**: 24/7 Available
- **Services**: Roadside Assistance, Engine Diagnostics, Trailer Repair, Tire Replacement, Mobile Mechanic, Fleet Maintenance

## 🚀 Performance Optimizations

- GSAP animations use `useLayoutEffect` for optimal performance
- ScrollTrigger optimizes scroll event handling
- Images are optimized and lazy-loaded
- CSS is minified through Tailwind
- Component-based architecture for code splitting

## 📝 Customization

### Change Colors
Edit `/app/globals.css` CSS variables:
```css
--primary: #YOUR_COLOR;
--foreground: #YOUR_COLOR;
--background: #YOUR_COLOR;
```

### Modify Animations
Edit component `useEffect` hooks in respective component files to adjust:
- Animation duration
- Easing functions
- Delay values
- Trigger positions

### Update Content
Replace placeholder text in components with your actual content:
- Service descriptions
- Testimonials
- Contact information
- Social media links

## 🔗 Deployment

Deploy to Vercel with one click:

```bash
pnpm build
```

Then connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

This project is created for DH Truck Repairing and is proprietary.

## 🤝 Support

For questions or modifications, contact the development team.

---

Built with ❤️ using Next.js, GSAP, and Tailwind CSS
