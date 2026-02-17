# GSAP Animation Guide - DH Truck Repairing

Comprehensive guide to all GSAP animations implemented in the DH Truck Repairing website.

## 🎬 Animation Overview

### Components & Their Animations

---

## 1. Navbar (`components/navbar.tsx`)

**Animations:**
- ✨ **Shrink on Scroll**: Navbar padding reduces from 1rem to 0.5rem as user scrolls
- 🎯 **Menu Slide In**: Mobile menu slides in from right with fade
- 📝 **Link Animations**: Desktop links have animated underline on hover
- ⏱️ **Duration**: 0.3-0.4 seconds

**GSAP Techniques:**
```javascript
gsap.to(navRef, { paddingTop, paddingBottom, duration: 0.3 })
gsap.fromTo(menuRef, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 })
```

---

## 2. Hero Section (`components/hero.tsx`)

**Animations:**
- 📍 **Heading Slide In**: Title slides from left (-100px) with opacity fade
- ⬆️ **Subheading Fade Up**: Subtitle fades up from bottom with 0.2s delay
- 🎮 **Button Scale In**: CTA buttons scale from 0 to 1 with spring easing
- 🌌 **Parallax Background**: Background image moves slower on scroll

**GSAP Techniques:**
```javascript
gsap.fromTo(headingRef, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
gsap.to(imageRef, { y: -50, scrollTrigger: { scrub: 1 } })
```

**Easing**: `power3.out`, `back.out(1.7)`
**Duration**: 0.8-1 second

---

## 3. Services Section (`components/services.tsx`)

**Animations:**
- 📊 **Card Fade Up Stagger**: 6 cards fade up with 0.15s stagger
- 🎨 **Hover Scale**: Cards scale to 1.05 on hover
- ✨ **Hover Glow**: Red box shadow appears on hover
- 🔄 **Scroll Trigger**: Animations trigger when section enters viewport

**GSAP Techniques:**
```javascript
gsap.fromTo(cards, { y: 100, opacity: 0 }, 
  { y: 0, opacity: 1, stagger: 0.15, scrollTrigger: {...} })
gsap.to(card, { scale: 1.05, boxShadow: '0 20px 40px rgba(193, 18, 31, 0.3)' })
```

**Easing**: `power3.out`
**Duration**: 0.8 second, Stagger: 0.15s

---

## 4. Why Choose Us (`components/why-choose-us.tsx`)

**Animations:**
- 👈 **Image Slide In**: Image slides from left on scroll
- ➡️ **Text Slide In**: Text slides from right on scroll
- 📍 **Bullet Points Stagger**: Feature list items reveal left to right
- 🎯 **Scroll Trigger**: All triggered on section scroll

**GSAP Techniques:**
```javascript
gsap.fromTo(imageRef, { x: -100, opacity: 0 }, { x: 0, opacity: 1, scrollTrigger: {...} })
gsap.fromTo(bullets, { x: 30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1 })
```

**Easing**: `power3.out`, `power2.out`
**Duration**: 0.8 second

---

## 5. Emergency Banner (`components/emergency-banner.tsx`)

**Animations:**
- 🚨 **Banner Slide Up**: Section slides up on scroll
- 💥 **Pulse Button**: Button glows with pulsing effect on loop
- 🌊 **Blob Background**: Animated blob shapes in background

**GSAP Techniques:**
```javascript
gsap.fromTo(bannerRef, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
gsap.timeline({ repeat: -1 })
  .to(button, { boxShadow: '0 0 40px...', duration: 1 })
  .to(button, { boxShadow: '0 0 20px...', duration: 1 }, 0)
```

**Easing**: `power3.out`, `sine.inOut`
**Duration**: 0.8-1 second

---

## 6. Process Timeline (`components/process.tsx`)

**Animations:**
- 🔢 **Steps Sequential**: Each step fades up with 0.2s delay between
- ➖ **Connector Line**: Timeline line scales from left with delay
- 📍 **Scroll Triggered**: Animations sync with scroll position

**GSAP Techniques:**
```javascript
gsap.fromTo(step, { y: 100, opacity: 0 }, 
  { y: 0, opacity: 1, delay: idx * 0.2, scrollTrigger: {...} })
gsap.fromTo(connector, { scaleX: 0 }, { scaleX: 1, duration: 1.2 })
```

**Easing**: `power3.out`, `power2.inOut`
**Duration**: 0.8 second per step, 1.2 second for line

---

## 7. Testimonials (`components/testimonials.tsx`)

**Animations:**
- 🎤 **Card Fade In**: Testimonial card fades in on load
- ↔️ **Carousel Transition**: New testimonials fade and slide in on change
- 🔘 **Dot Navigation**: Active indicator animates width

**GSAP Techniques:**
```javascript
gsap.fromTo(cardRef, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 })
gsap.to(dots[current], { width: '2rem' })
```

**Easing**: `power2.out`
**Duration**: 0.5 second

---

## 8. Service Area (`components/service-area.tsx`)

**Animations:**
- 🔍 **Image Zoom In**: Map image scales from 0.8 to 1
- 📝 **Text Fade In**: Description text fades and slides up
- 🎯 **Scroll Triggered**: Synced with scroll position

**GSAP Techniques:**
```javascript
gsap.fromTo(imageRef, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 })
gsap.fromTo(textRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0.3 })
```

**Easing**: `power3.out`
**Duration**: 0.8-1 second

---

## 9. Contact CTA (`components/contact-cta.tsx`)

**Animations:**
- 📋 **Form Slide Up**: Form container slides up on scroll
- 📞 **Phone Number Pulse**: Emergency number has text-shadow glow animation
- 🔤 **Form Fields Stagger**: Input fields fade in with stagger

**GSAP Techniques:**
```javascript
gsap.fromTo(formRef, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
gsap.timeline({ repeat: -1 })
  .to(phoneRef, { textShadow: '0 0 20px...', duration: 1.5 })
gsap.fromTo('.form-field', { y: 20, opacity: 0 }, 
  { y: 0, opacity: 1, stagger: 0.1 })
```

**Easing**: `power3.out`, `sine.inOut`
**Duration**: 0.6-1 second

---

## 10. Footer (`components/footer.tsx`)

**Animations:**
- ⬆️ **Fade In Slide Up**: Footer content fades in and slides up on scroll

**GSAP Techniques:**
```javascript
gsap.fromTo(contentRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
```

**Easing**: `power3.out`
**Duration**: 0.8 second

---

## 11. Floating Call Button (`components/floating-call-button.tsx`)

**Animations:**
- 🎈 **Floating Effect**: Button continuously floats up and down
- 💫 **Pulsing Glow**: Box shadow pulses continuously
- 🎯 **Hover Scale**: Button scales up 1.15x on hover

**GSAP Techniques:**
```javascript
gsap.to(button, { y: -10, duration: 2, yoyo: true, repeat: -1 })
gsap.timeline({ repeat: -1 })
  .to(button, { boxShadow: '0 0 30px...', duration: 2 }, 0)
gsap.to(button, { scale: 1.15, duration: 0.3, ease: 'back.out(1.7)' })
```

**Easing**: `sine.inOut`, `back.out(1.7)`
**Duration**: 2 seconds (floating), 0.3 seconds (hover)

---

## 📊 Animation Summary Table

| Component | Animation | Duration | Easing | Trigger |
|-----------|-----------|----------|--------|---------|
| Navbar | Shrink | 0.3s | ease-out | Scroll |
| Hero | Slide In | 1s | power3.out | Load |
| Services | Fade Up | 0.8s | power3.out | Scroll |
| Banner | Slide Up | 0.8s | power3.out | Scroll |
| Process | Sequence | 0.8s | power3.out | Scroll |
| Testimonials | Fade | 0.5s | power2.out | Click |
| Contact | Fade Up | 0.8s | power3.out | Scroll |
| Float Button | Float | 2s | sine.inOut | Continuous |

---

## 🎯 GSAP Best Practices Used

1. **useRef Hooks**: Direct DOM access for animations
2. **useEffect Cleanup**: Proper animation timeline cleanup
3. **ScrollTrigger**: Efficient scroll-based animations
4. **gsap.context()**: Automatic cleanup of all child animations
5. **Staggered Animations**: Sequential element animations
6. **Performance**: Hardware acceleration where applicable

---

## 🚀 Performance Tips

- ScrollTrigger optimizes scroll event listeners
- Context automatically reverts animations on component unmount
- Animations use transform and opacity for best performance
- No block layouts modified during animation
- Smooth 60fps animations throughout

---

## 🎨 Customizing Animations

### Change Animation Duration
```javascript
// Find in component and modify duration value
duration: 1 // Change to 0.5, 2, etc.
```

### Change Easing
```javascript
// Available easing functions:
ease: 'power3.out'  // Linear acceleration
ease: 'back.out'    // Springy bounce
ease: 'sine.inOut'  // Smooth wave
ease: 'elastic.out' // Elastic bounce
```

### Adjust Stagger Timing
```javascript
stagger: 0.15 // Change spacing between animations
```

### Modify Scroll Trigger Position
```javascript
scrollTrigger: {
  trigger: sectionRef,
  start: 'top center',    // Change to 'top center+=100'
  toggleActions: 'play none none reverse'
}
```

---

## 📚 GSAP Documentation

For more details on GSAP features:
- **Official Docs**: https://greensock.com/docs/
- **ScrollTrigger**: https://greensock.com/scrolltrigger/
- **Easing Visualizer**: https://greensock.com/ease-visualizer/

---

**Last Updated**: 2024
**GSAP Version**: ^3.12.2
