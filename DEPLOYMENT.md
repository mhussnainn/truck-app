# Deployment Guide - DH Truck Repairing

Complete guide to deploying the DH Truck Repairing website to production.

## 🚀 Quick Start Deployment to Vercel

### Prerequisites
- GitHub account with the repository pushed
- Vercel account (free at vercel.com)

### Step 1: Build Locally (Optional but Recommended)
```bash
pnpm install
pnpm build
```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts to connect your GitHub repo.

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Import"
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

### Step 3: Configure Environment (if needed)
No environment variables needed for this project!

## 🌍 Domain Configuration

### Connect Custom Domain

1. In Vercel Dashboard, go to Settings → Domains
2. Add your domain (e.g., dhtruckrepairing.com)
3. Update your domain registrar DNS records:

```dns
Name: @
Type: A
Value: 76.76.19.165

Name: www
Type: CNAME
Value: cname.vercel.com
```

4. Wait for DNS propagation (5-30 minutes)
5. Vercel will auto-provision SSL certificate

## 📋 Pre-Deployment Checklist

- [ ] All components tested in development
- [ ] GSAP animations smooth and performant
- [ ] Images optimized and loading correctly
- [ ] Mobile responsiveness verified
- [ ] Contact form backend connected (if implementing)
- [ ] Analytics tracking set up (if needed)
- [ ] Phone number links updated to real numbers
- [ ] Social media links updated
- [ ] Business information accurate
- [ ] SEO metadata optimized

## 🔧 Environment Variables (None Required)

This project requires no environment variables. All content is hardcoded.

However, if you plan to add backend features, add these:

```env
# Optional - Email service
NEXT_PUBLIC_CONTACT_EMAIL=contact@dhtruckrepairing.com
SENDGRID_API_KEY=your_sendgrid_key

# Optional - Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📱 SEO & Meta Tags

Update metadata in `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'DH Truck Repairing | Emergency Truck Repair Services',
  description: 'Professional truck repair, roadside assistance, and fleet maintenance. Available 24/7 nationwide.',
  openGraph: {
    title: 'DH Truck Repairing',
    description: 'Emergency truck repair services',
    type: 'website',
    url: 'https://dhtruckrepairing.com',
    siteName: 'DH Truck Repairing',
  },
};
```

## 🎨 Customization Before Deployment

### Update Business Information
1. **Phone Number**: Replace `1-800-TRUCK-NOW` in:
   - `components/contact-cta.tsx` (line 91)
   - `components/floating-call-button.tsx` (line 59)
   - `components/footer.tsx` (line 148)

2. **Brand Colors**: Edit `/app/globals.css`:
   ```css
   --primary: #C1121F; /* Change to your brand color */
   ```

3. **Content**: Update service descriptions and testimonials in each component

4. **Images**: Replace `truck-repair.jpg` with actual business photos

5. **Social Links**: Update in `components/footer.tsx`

### Add Contact Form Backend
Create API route `/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Send email or save to database
  // const result = await sendEmail(data);
  
  return NextResponse.json({ success: true });
}
```

Then update form submission in `components/contact-cta.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

## 🔐 Security Considerations

### Before Going Live

1. **Remove Debug Code**: Ensure no `console.log` debug statements
2. **Validate Input**: Form validation is basic, add backend validation
3. **HTTPS**: Vercel auto-enables HTTPS
4. **Content Security Policy**: Add if needed in `next.config.mjs`
5. **Environment Secrets**: Use Vercel's environment variables for sensitive data

### Recommended Security Additions

```typescript
// In next.config.mjs
const headers = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
];
```

## 📊 Performance Optimization

### Current Optimizations
- ✅ GSAP animations optimized with `transform` and `opacity`
- ✅ Image lazy loading with Next.js Image component
- ✅ Code splitting via component architecture
- ✅ Tailwind CSS production build minification

### Additional Performance Steps

1. **Enable Image Optimization**:
```typescript
// next.config.mjs
export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.example.com' }
    ]
  }
};
```

2. **Enable Compression**:
Vercel automatically enables gzip compression

3. **Monitor Performance**:
- Vercel Analytics (free)
- Web Vitals in `/components/web-vitals.tsx`
- Google PageSpeed Insights

## 📈 Analytics Setup

### Google Analytics
1. Create Google Analytics property
2. Get Measurement ID
3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Create `/components/google-analytics.tsx`:
```typescript
export default function GoogleAnalytics() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}/>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }} />
    </>
  );
}
```

### Vercel Analytics
Already integrated via `@vercel/analytics`

## 🔄 Continuous Deployment

### GitHub Integration
1. Push changes to GitHub
2. Vercel auto-detects changes
3. Automatic build and deployment
4. Preview deployments for pull requests
5. Production deployment on merge to main

### Deployment Commands
```bash
# Development
pnpm dev

# Build
pnpm build

# Production
pnpm start

# Lint code
pnpm lint
```

## 🛠️ Troubleshooting Deployment

### Issue: Build Fails
```bash
# Clear cache and rebuild
vercel build --prod

# Check logs
vercel logs
```

### Issue: Animations Not Smooth
- Ensure GSAP version matches: `"gsap": "^3.12.2"`
- Check for console errors in browser DevTools
- Verify ScrollTrigger is registered

### Issue: Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check mobile viewport settings
- Verify Tailwind mobile breakpoints

## 📞 After Deployment

### Important Tasks

1. **Test Everything**:
   - All animations smooth
   - Mobile responsive
   - Forms functional
   - Links working

2. **Set Up Monitoring**:
   - Vercel uptime monitoring
   - Google Analytics
   - Error tracking (optional: Sentry)

3. **Update Contact Routes**:
   - Email notifications
   - Form submission handling
   - Phone number routing

4. **Backup Strategy**:
   - GitHub repository is backup
   - Vercel maintains deployment history
   - Keep local backup of custom content

## 🚀 Performance Metrics (Target)

- **Lighthouse Score**: 90+
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

## 📚 Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GSAP Docs**: https://greensock.com/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs

## 🆘 Support

For deployment issues:
1. Check Vercel logs: `vercel logs`
2. Review Next.js build output
3. Verify environment variables
4. Clear cache: `vercel env pull`

---

## Quick Reference Commands

```bash
# Local development
pnpm dev              # Start dev server on localhost:3000

# Building
pnpm build            # Create production build
pnpm start            # Run production build locally

# Deployment
vercel                # Deploy to Vercel
vercel --prod         # Deploy to production
vercel logs          # View deployment logs
vercel env pull      # Pull environment variables

# Code quality
pnpm lint            # Run ESLint

# Package management
pnpm install         # Install all dependencies
pnpm update          # Update dependencies
```

---

**Last Updated**: 2024
**Recommended Hosting**: Vercel
**Estimated Deploy Time**: 2-5 minutes
**Monthly Cost**: Free tier available
