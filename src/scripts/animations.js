import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // ─── NAVBAR ───────────────────────────────────────────
  gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });

  // ─── HERO ─────────────────────────────────────────────
  // Grid lines animation
  gsap.from('.grid-line-h', {
    scaleX: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power2.inOut',
    delay: 0.2,
  });

  gsap.from('.grid-line-v', {
    scaleY: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power2.inOut',
    delay: 0.4,
  });

  // Hero text lines stagger
  gsap.from('.hero-line', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power4.out',
    delay: 0.3,
  });

  // Hero animation - start dotLottie when it becomes visible
  gsap.from('#dotlottie-canvas', {
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    delay: 0.3,
    onStart: function () {
      const desktop = (window).dotLottieInstance;
      if (desktop) {
        desktop.play();
      }
    },
  });

  gsap.from('#dotlottie-canvas-mobile', {
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    delay: 0.3,
    onStart: function () {
      const mobile = (window).dotLottieInstanceMobile;
      if (mobile) {
        mobile.play();
      }
    },
  });

  // ─── FEATURES ─────────────────────────────────────────
  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.features-grid',
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });

  // ─── PROJECTS ─────────────────────────────────────────
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 75%',
    },
    clipPath: 'inset(100% 0% 0% 0%)',
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.inOut',
  });

  // ─── STATS ────────────────────────────────────────────
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = Number.parseInt(el.dataset.target || '0');
    gsap.to(
      { val: 0 },
      {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        val: target,
        duration: 2,
        ease: 'power1.out',
        onUpdate: function () {
          el.textContent = Math.round(this.targets()[0].val).toString();
        },
      }
    );
  });

  // ─── STATS: FLAGS RELAY (sincronizado con el timeline de las stats) ──
  // El relevo de banderas se dispara cuando la sección de stats entra en viewport,
  // al mismo tiempo que los contadores (2s). Cada bandera aparece en secuencia
  // (USA -> España -> Perú -> Chile -> México -> Colombia) con un pulso de relevo
  // suave, quedando todas visibles al final.
  const flagsRelay = document.querySelector('.flags-relay');
  if (flagsRelay) {
    const flagItems = gsap.utils.toArray('.flag-item');
    const flagsTl = gsap.timeline({
      scrollTrigger: {
        trigger: flagsRelay,
        start: 'top 90%',
      },
      defaults: { ease: 'power2.inOut' },
    });

    flagItems.forEach((flag, i) => {
      const t = i * 0.18; // stagger suave entre banderas

      // 1. Aparece la bandera (fade + subida + escala)
      flagsTl.to(
        flag,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: 'power3.out',
        },
        t
      );

      // 2. Pulso de relevo (brillo + elevación) — se solapa con la aparición
      flagsTl.to(
        flag,
        {
          filter: 'brightness(1.4) saturate(1.25)',
          y: -5,
          scale: 1.1,
          duration: 0.35,
          ease: 'sine.inOut',
        },
        t + 0.35
      );

      // 3. Vuelve a la normalidad (queda visible)
      flagsTl.to(
        flag,
        {
          filter: 'brightness(1) saturate(1)',
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: 'sine.inOut',
        },
        t + 0.7
      );
    });
  }

  // ─── PROCESS ──────────────────────────────────────────
  // Line draw on scroll
  gsap.from('.process-line', {
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: 1,
    },
    scaleY: 0,
    transformOrigin: 'top center',
    ease: 'none',
  });

  gsap.from('.process-line-mobile', {
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: 1,
    },
    scaleY: 0,
    transformOrigin: 'top center',
    ease: 'none',
  });

  // Process steps
  gsap.from('.process-step', {
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 65%',
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.25,
    ease: 'power2.out',
  });

  // ─── CTA PARALLAX ────────────────────────────────────
  gsap.to('.cta-bg', {
    scrollTrigger: {
      trigger: '.cta-section',
      scrub: 1,
    },
    yPercent: -20,
  });

  // ─── SECTION HEADERS ─────────────────────────────────
  // Animate all section headers on scroll
  document.querySelectorAll('section > div > .flex').forEach((header) => {
    // Only target the section headers (those with the decorative bar)
    if (header.querySelector('.bg-gradient-to-b')) {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        },
        x: -30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    }
  });
}
