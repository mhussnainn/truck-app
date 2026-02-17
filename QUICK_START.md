# Quick Start Guide - DH Truck Repairing

Get up and running in 5 minutes!

## 🚀 Development (Local)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
# Visit: http://localhost:3000
```

**Result**: Live website with hot reload on file changes

---

## 🏗️ Production Build

```bash
# Build for production
pnpm build

# Test production build locally
pnpm start

# Visit: http://localhost:3000
```

**Result**: Optimized production-ready build

---

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Via CLI (Fastest)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Follow prompts to connect GitHub
```

### Option 2: Via Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select your GitHub repository
4. Click "Deploy"

**Result**: Live website at `*.vercel.app` domain

---

## 🎨 Quick Customizations

### Change Brand Color
**File**: `/app/globals.css`
```css
--primary: #C1121F; /* Change to your color */
```

### Update Phone Number
**Files**: 
- `components/contact-cta.tsx` (line 91)
- `components/floating-call-button.tsx` (line 59)
- `components/footer.tsx` (line 148)

Replace: `1-800-TRUCK-NOW`
With: `YOUR-PHONE-NUMBER`

### Update Business Name
**Files**: Multiple (search/replace)
Search: `DH Truck`
Replace: `Your Company`

### Update Content
Edit each component file to modify:
- Service descriptions
- Feature lists
- Testimonials
- Contact information

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page structure |
| `app/globals.css` | Theme colors & animations |
| `app/layout.tsx` | SEO metadata |
| `components/navbar.tsx` | Navigation |
| `components/hero.tsx` | Hero section |
| `components/services.tsx` | Services grid |
| `components/contact-cta.tsx` | Contact form |
| `components/footer.tsx` | Footer |
| `package.json` | Dependencies |

---

## 🎬 Animation Examples

### Adjust Animation Speed
**File**: `components/hero.tsx`
```javascript
duration: 1 // Change to 0.5 (faster) or 2 (slower)
```

### Change Easing
```javascript
ease: 'power3.out' // Try: 'back.out', 'sine.inOut', 'elastic.out'
```

### Modify Stagger Timing
```javascript
stagger: 0.15 // Change to 0.05 (faster) or 0.3 (slower)
```

---

## 🔍 Code Structure

```
Project Root
├── app/
│   ├── page.tsx          → Main page (edit this)
│   ├── layout.tsx        → SEO & metadata
│   └── globals.css       → Colors & animations
│
├── components/
│   ├── navbar.tsx        → Top menu
│   ├── hero.tsx          → Hero section
│   ├── services.tsx      → Services grid
│   └── ... (other sections)
│
└── public/
    └── truck-repair.jpg  → Hero image
```

---

## 📋 Tasks Checklist

### Before Going Live
- [ ] Update all business information
- [ ] Replace placeholder images
- [ ] Update phone numbers
- [ ] Customize brand colors
- [ ] Test on mobile devices
- [ ] Test on desktop browsers
- [ ] Set up email notifications
- [ ] Configure analytics
- [ ] Test contact form
- [ ] Verify all links work

### After Deploying
- [ ] Test live website
- [ ] Set up custom domain
- [ ] Enable HTTPS (auto on Vercel)
- [ ] Add to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test performance metrics
- [ ] Monitor uptime

---

## 🆘 Troubleshooting

### Animations Not Smooth
```bash
# Check that GSAP is installed
pnpm list gsap

# If missing, install:
pnpm add gsap@^3.12.2
```

### Build Fails
```bash
# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Build again
pnpm build
```

### Mobile Menu Not Working
- Check in browser DevTools Console for errors
- Verify Tailwind classes are being applied
- Clear browser cache and reload

### Animations Play on Wrong Events
- Check ScrollTrigger configuration
- Verify scroll position values
- Test in different browsers

---

## 💻 Development Tips

### Hot Reload Development
- Changes to files save automatically
- Styles update instantly
- Component updates without page refresh
- Perfect for quick iterations

### TypeScript Type Checking
```bash
# Check for type errors
pnpm tsc --noEmit
```

### Code Quality
```bash
# Run linter
pnpm lint

# Fix auto-fixable issues
pnpm lint --fix
```

### Performance Testing
1. Open DevTools → Lighthouse
2. Run Lighthouse audit
3. Check scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

---

## 📱 Responsive Testing

### Test Breakpoints
```css
/* Mobile-first */
Default styles (mobile)
sm: 640px  (large mobile)
md: 768px  (tablet)
lg: 1024px (desktop)
```

### Test Devices
- iPhone 12/13/14
- iPad
- Desktop (1920px)
- Ultra-wide (2560px)
- Use Chrome DevTools

---

## 🚀 Performance Metrics

**Target Scores:**
- Lighthouse Performance: 90+
- Cumulative Layout Shift (CLS): < 0.1
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s

**Check Performance:**
```bash
# Vercel Analytics (automatic)
# Google PageSpeed Insights (https://pagespeed.web.dev/)
# WebPageTest (https://www.webpagetest.org/)
```

---

## 🔐 Security

### Before Production
1. No hardcoded API keys
2. Form validation on server
3. HTTPS enabled (auto on Vercel)
4. Content Security Policy headers
5. Remove debug console.log statements

### Environment Variables
```bash
# Create .env.local for sensitive data
NEXT_PUBLIC_GA_ID=your_id_here
```

---

## 📊 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXX)
3. Add to environment variables
4. Vercel automatically tracks metrics

### Vercel Analytics
- Auto-enabled on Vercel
- View in Vercel Dashboard
- Real-time web vitals

---

## 🎓 Learning Resources

**In Project:**
- `/README.md` - Full documentation
- `/ANIMATION_GUIDE.md` - GSAP animations explained
- `/PROJECT_STRUCTURE.md` - Architecture details
- `/DEPLOYMENT.md` - Deploy instructions

**External:**
- [Next.js Docs](https://nextjs.org/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

## 📞 Quick Reference Commands

```bash
# Development
pnpm dev              # Start local dev server

# Building
pnpm build            # Build for production
pnpm start            # Run production build

# Code Quality
pnpm lint             # Check code quality
pnpm lint --fix       # Auto-fix issues

# Dependencies
pnpm install          # Install dependencies
pnpm add <package>    # Add new package
pnpm remove <package> # Remove package
pnpm update           # Update all packages

# Deployment (Vercel CLI)
vercel                # Deploy to preview
vercel --prod         # Deploy to production
vercel logs           # View logs
```

---

## 🎯 30-Second Summary

1. **Install**: `pnpm install`
2. **Develop**: `pnpm dev`
3. **Test**: Open http://localhost:3000
4. **Customize**: Edit component files
5. **Deploy**: `vercel` (connect GitHub)
6. **Domain**: Add custom domain in Vercel

**Total Time to Live Site**: ~5-10 minutes

---

## ⚡ Performance Checklist

- ✅ GSAP animations use transform/opacity
- ✅ Images lazy loaded automatically
- ✅ CSS minified in production
- ✅ Code split by components
- ✅ ScrollTrigger optimized
- ✅ No layout shift issues
- ✅ Mobile optimized
- ✅ Production build tested

---

## 🎉 You're Ready!

Your DH Truck Repairing website is ready to launch. Choose your hosting and go live!

**Questions?** Check the detailed documentation files included in the project.

---

**Happy coding! 🚀**
