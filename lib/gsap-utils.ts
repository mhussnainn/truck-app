import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-reversible animation - moves element based on scroll position
 * Animates from 'from' state at trigger start to 'to' state at trigger end
 * Reverses when scrolling back
 */
export const createScrollAnimation = (
  selector: string,
  fromProps: gsap.TweenVars,
  toProps: gsap.TweenVars,
  options: {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: number | boolean;
    markers?: boolean;
  } = {}
) => {
  const {
    trigger = selector,
    start = 'top center',
    end = 'bottom center',
    scrub = 1,
    markers = false,
  } = options;

  return gsap.fromTo(
    selector,
    fromProps,
    {
      ...toProps,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        markers,
      },
    }
  );
};

/**
 * Parallax scroll animation
 */
export const createParallaxAnimation = (
  selector: string,
  speed: number = 0.5,
  direction: 'y' | 'x' = 'y'
) => {
  return gsap.to(selector, {
    [direction === 'y' ? 'y' : 'x']: (i, target) => {
      return -(ScrollTrigger.getVelocity() * speed);
    },
    scrollTrigger: {
      trigger: selector,
      onUpdate: (self) => {
        gsap.to(selector, {
          [direction === 'y' ? 'y' : 'x']: -self.getVelocity() * speed * 0.1,
          overwrite: 'auto',
          duration: 0.5,
        });
      },
    },
  });
};

/**
 * Staggered fade-in animation
 */
export const createStaggerAnimation = (
  selector: string,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number;
    start?: string;
    end?: string;
    scrub?: number | boolean;
  } = {}
) => {
  const {
    duration = 0.8,
    delay = 0,
    stagger = 0.2,
    start = 'top 80%',
    end = 'top 50%',
    scrub = 0,
  } = options;

  return gsap.fromTo(
    selector,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      scrollTrigger: {
        trigger: selector,
        start,
        end,
        scrub,
      },
    }
  );
};

/**
 * Horizontal scroll animation
 */
export const createHorizontalScroll = (
  selector: string,
  options: {
    speed?: number;
    duration?: number;
    ease?: string;
  } = {}
) => {
  const { speed = 1, duration = 3, ease = 'power2.inOut' } = options;

  return gsap.fromTo(
    selector,
    { x: 0, opacity: 0 },
    {
      x: 500 * speed,
      opacity: 1,
      duration,
      ease,
      scrollTrigger: {
        trigger: selector,
        start: 'top center',
        end: 'bottom center',
        scrub: 1.5,
        markers: false,
      },
    }
  );
};

/**
 * Rotate and scale animation
 */
export const createRotateScaleAnimation = (
  selector: string,
  options: {
    rotation?: number;
    scale?: number;
    duration?: number;
  } = {}
) => {
  const { rotation = 360, scale = 1.2, duration = 1.5 } = options;

  return gsap.fromTo(
    selector,
    { rotation: 0, scale: 1 },
    {
      rotation,
      scale,
      duration,
      ease: 'back.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
    }
  );
};

/**
 * Text animation - letter by letter
 */
export const createTextAnimation = (
  selector: string,
  options: {
    duration?: number;
    stagger?: number;
  } = {}
) => {
  const { duration = 0.05, stagger = 0.05 } = options;

  // Split text into spans
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent || '';
  element.innerHTML = text
    .split('')
    .map((char) => `<span class="inline-block">${char}</span>`)
    .join('');

  return gsap.fromTo(
    `${selector} span`,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'back.out',
    }
  );
};

/**
 * Button hover animation
 */
export const createButtonHoverAnimation = (selector: string) => {
  const buttons = document.querySelectorAll(selector);

  buttons.forEach((button) => {
    const button_element = button as HTMLElement;

    button_element.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(193, 18, 31, 0.6)',
        duration: 0.3,
        overwrite: 'auto',
      });
    });

    button_element.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: '0 4px 15px rgba(193, 18, 31, 0.3)',
        duration: 0.3,
        overwrite: 'auto',
      });
    });
  });
};

/**
 * You effect animation (scale and fade with glow)
 */
export const createYouEffect = (selector: string) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const el = element as HTMLElement;

    const onMouseEnter = () => {
      gsap.to(el, {
        scale: 1.1,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      gsap.to(el, {
        boxShadow: [
          '0 0 0 0 rgba(193, 18, 31, 0.7)',
          '0 0 0 20px rgba(193, 18, 31, 0)',
        ],
        duration: 0.6,
        ease: 'power2.out',
        delay: 0,
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
  });
};

/**
 * Glitch animation
 */
export const createGlitchAnimation = (selector: string) => {
  return gsap.to(selector, {
    x: () => gsap.utils.random(-3, 3),
    y: () => gsap.utils.random(-3, 3),
    duration: 0.1,
    repeat: -1,
    repeatDelay: 0.1,
  });
};

/**
 * Counter animation
 */
export const createCounterAnimation = (
  selector: string,
  target: number,
  options: {
    duration?: number;
    start?: string;
    end?: string;
  } = {}
) => {
  const { duration = 2, start = 'top 80%', end = 'top 30%' } = options;

  const counter = { value: 0 };

  return gsap.to(counter, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        element.textContent = Math.floor(counter.value).toString();
      }
    },
    scrollTrigger: {
      trigger: selector,
      start,
      end,
      scrub: 1,
    },
  });
};

/**
 * Navbar scroll animation - shrink and change background
 */
export const createNavbarScrollAnimation = (
  navbarSelector: string,
  options: {
    fromHeight?: string;
    toHeight?: string;
    fromBg?: string;
    toBg?: string;
  } = {}
) => {
  const {
    fromHeight = '80px',
    toHeight = '60px',
    fromBg = 'rgba(255, 255, 255, 0)',
    toBg = 'rgba(255, 255, 255, 0.95)',
  } = options;

  return gsap.fromTo(
    navbarSelector,
    {
      height: fromHeight,
      backgroundColor: fromBg,
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
    },
    {
      height: toHeight,
      backgroundColor: toBg,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'top 100px',
        scrub: 1,
        markers: false,
      },
    }
  );
};

/**
 * Clean up animations
 */
export const killAllAnimations = () => {
  gsap.globalTimeline.clear();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

/**
 * Refresh ScrollTrigger
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
