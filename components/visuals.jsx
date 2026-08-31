/* Animated agent flow diagram — hero photo art */

const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

function AgentFlow() {
  return (
    <div className="hero-photo-art" aria-hidden="true">
      <img src="assets/problem/hero-background.png" alt="" />
      <span className="hero-photo-art__scan"></span>
      <span className="hero-photo-art__glow hero-photo-art__glow--one"></span>
      <span className="hero-photo-art__glow hero-photo-art__glow--two"></span>
      <span className="hero-photo-art__pulse hero-photo-art__pulse--one"></span>
      <span className="hero-photo-art__pulse hero-photo-art__pulse--two"></span>
      {Array.from({ length: 12 }).map((_, i) => (
        <i key={i} className={`hero-photo-art__spark hero-photo-art__spark--${i + 1}`}></i>
      ))}
      <style>{`
        .hero-photo-art {
          position: relative;-
          width: 100%;
          aspect-ratio: 780 / 455;
          overflow: visible;
          filter: drop-shadow(0 34px 90px oklch(60% 0.120 190 / 0.12)) drop-shadow(0 30px 80px oklch(19% 0.025 255 / 0.58));
          animation: heroPhotoFloat 6s ease-in-out infinite;
          isolation: isolate;
        }
        .hero-photo-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 0;
          transform: scale(1.045);
          animation: heroPhotoZoom 10s ease-in-out infinite alternate;
          -webkit-mask-image:
            radial-gradient(ellipse at 63% 52%, oklch(16% 0.012 255) 34%, oklch(16% 0.012 255 / 0.78) 52%, oklch(16% 0.012 255 / 0.24) 68%, transparent 82%);
          mask-image:
            radial-gradient(ellipse at 63% 52%, oklch(16% 0.012 255) 34%, oklch(16% 0.012 255 / 0.78) 52%, oklch(16% 0.012 255 / 0.24) 68%, transparent 82%);
        }
        .hero-photo-art::before {
          content: "";
          position: absolute;
          inset: -18% -15%;
          background:
            radial-gradient(circle at 58% 48%, oklch(60% 0.120 190 / 0.18), transparent 26%),
            radial-gradient(circle at 76% 34%, oklch(53% 0.200 258 / 0.12), transparent 24%),
            linear-gradient(90deg, oklch(16% 0.012 255 / 0.92) 0%, transparent 28%, transparent 66%, oklch(16% 0.012 255 / 0.88) 100%);
          mix-blend-mode: screen;
          opacity: 0.66;
          pointer-events: none;
          animation: heroPhotoBreath 3.8s ease-in-out infinite;
          z-index: 1;
        }
        .hero-photo-art::after {
          content: "";
          position: absolute;
          inset: -10% -12%;
          background:
            linear-gradient(90deg, oklch(16% 0.012 255) 0%, oklch(16% 0.012 255 / 0.64) 16%, transparent 34%, transparent 68%, oklch(16% 0.012 255 / 0.72) 86%, oklch(16% 0.012 255) 100%),
            linear-gradient(0deg, oklch(16% 0.012 255) 0%, oklch(16% 0.012 255 / 0.72) 16%, transparent 38%, transparent 70%, oklch(16% 0.012 255 / 0.72) 100%),
            linear-gradient(oklch(60% 0.120 190 / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, oklch(60% 0.120 190 / 0.08) 1px, transparent 1px);
          background-size: auto, auto, 42px 42px, 42px 42px;
          opacity: 0.5;
          mix-blend-mode: normal;
          animation: heroPhotoGrid 12s linear infinite;
          pointer-events: none;
          z-index: 1;
        }
        .hero-photo-art__scan,
        .hero-photo-art__glow,
        .hero-photo-art__pulse,
        .hero-photo-art__spark {
          position: absolute;
          display: block;
          pointer-events: none;
          z-index: 2;
        }
        .hero-photo-art__scan {
          inset: -8% -20%;
          background: linear-gradient(105deg, transparent 0 42%, oklch(60% 0.120 190 / 0) 46%, oklch(60% 0.120 190 / 0.46) 50%, transparent 55% 100%);
          transform: translateX(-80%);
          mix-blend-mode: screen;
          animation: heroPhotoScan 4.2s ease-in-out infinite;
        }
        .hero-photo-art__glow {
          width: 18%;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid oklch(60% 0.120 190 / 0.45);
          box-shadow: 0 0 24px oklch(60% 0.120 190 / 0.24), inset 0 0 22px oklch(60% 0.120 190 / 0.16);
          animation: heroPhotoOrbit 7s linear infinite, heroPhotoBreath 2.8s ease-in-out infinite;
        }
        .hero-photo-art__glow--one {
          left: 28%;
          top: 36%;
        }
        .hero-photo-art__glow--two {
          left: 61%;
          top: 18%;
          width: 15%;
          animation-duration: 5.6s;
          animation-direction: reverse;
        }
        .hero-photo-art__pulse {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: oklch(60% 0.120 190 / 0.78);
          box-shadow: 0 0 22px oklch(60% 0.120 190 / 0.82);
        }
        .hero-photo-art__pulse::after {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px solid oklch(60% 0.120 190 / 0.85);
          animation: heroPhotoRipple 1.8s ease-out infinite;
        }
        .hero-photo-art__pulse--one {
          left: 35.5%;
          top: 43%;
        }
        .hero-photo-art__pulse--two {
          left: 67%;
          top: 26.5%;
          animation-delay: -0.8s;
        }
        .hero-photo-art__spark {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-teal);
          box-shadow: 0 0 14px oklch(60% 0.120 190 / 0.9);
          animation: heroPhotoSpark 3.2s ease-in-out infinite;
        }
        .hero-photo-art__spark--1 { left: 8%; top: 20%; animation-delay: -0.2s; }
        .hero-photo-art__spark--2 { left: 18%; top: 38%; animation-delay: -1s; }
        .hero-photo-art__spark--3 { left: 12%; top: 72%; animation-delay: -1.7s; }
        .hero-photo-art__spark--4 { left: 28%; top: 26%; animation-delay: -2.5s; }
        .hero-photo-art__spark--5 { left: 42%; top: 56%; animation-delay: -0.5s; }
        .hero-photo-art__spark--6 { left: 54%; top: 32%; animation-delay: -1.4s; }
        .hero-photo-art__spark--7 { left: 63%; top: 48%; animation-delay: -2.2s; }
        .hero-photo-art__spark--8 { left: 71%; top: 18%; animation-delay: -0.8s; }
        .hero-photo-art__spark--9 { left: 24%; top: 76%; animation-delay: -2.8s; }
        .hero-photo-art__spark--10 { left: 47%; top: 18%; animation-delay: -1.9s; }
        .hero-photo-art__spark--11 { left: 58%; top: 70%; animation-delay: -0.1s; }
        .hero-photo-art__spark--12 { left: 74%; top: 35%; animation-delay: -2.9s; }
        @keyframes heroPhotoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroPhotoZoom {
          from { transform: scale(1.045); }
          to { transform: scale(1.085); }
        }
        @keyframes heroPhotoBreath {
          0%, 100% { opacity: 0.42; filter: brightness(1); }
          50% { opacity: 0.92; filter: brightness(1.22); }
        }
        @keyframes heroPhotoGrid {
          to { background-position: 42px 42px; }
        }
        @keyframes heroPhotoScan {
          0%, 34% { transform: translateX(-82%); opacity: 0; }
          48% { opacity: 1; }
          76%, 100% { transform: translateX(82%); opacity: 0; }
        }
        @keyframes heroPhotoOrbit {
          to { transform: rotate(360deg); }
        }
        @keyframes heroPhotoRipple {
          0% { opacity: 0.9; transform: scale(0.45); }
          100% { opacity: 0; transform: scale(3.1); }
        }
        @keyframes heroPhotoSpark {
          0%, 100% { opacity: 0.24; transform: translateY(0) scale(0.7); }
          50% { opacity: 1; transform: translateY(-12px) scale(1.18); }
        }
        @media (max-width: 980px) {
          .hero-photo-art { max-width: 680px; margin: 0 auto; }
        }
      `}</style>
    </div>
  );
}

// Particle background for dark sections
function ParticleField() {
  const canvasRef = useRef2(null);

  useEffect2(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let w, h, particles, raf;

    const setup = () => {
      w = c.width = c.offsetWidth * devicePixelRatio;
      h = c.height = c.offsetHeight * devicePixelRatio;
      particles = Array.from({length: 60}, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "oklch(53% 0.200 258 / 0.5)";
        ctx.fill();
      });
      // connect close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 140 * devicePixelRatio) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `oklch(53% 0.200 258 / ${0.15 * (1 - d / (140 * devicePixelRatio))})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    setup();
    tick();
    window.addEventListener("resize", setup);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", setup); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }} />;
}

// Marquee of customer logos (placeholders)
function LogoMarquee() {
  const logos = [
    "NOVASKY LLC", "VELOSYS CORPORATION", "KATARI GROUP", "NELAVANKA", "M.Y.PILGRIMS", "SENIOR REVIVAL",
    "THE COIN LABS",
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...logos, ...logos].map((l, i) => (
          <div key={i} className="logo-item">{l}</div>
        ))}
      </div>
      <style>{`
        .logo-item {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 22px;
          letter-spacing: 0.06em;
          color: var(--ink-mute);
          opacity: 0.7;
          white-space: nowrap;
          transition: opacity 0.2s ease, color 0.2s ease;
        }
        .logo-item:hover { opacity: 1; color: var(--ink); }
      `}</style>
    </div>
  );
}

// Animated counter
function Counter({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState2(0);
  const ref = useRef2(null);
  const started = useRef2(false);

  useEffect2(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(to * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

Object.assign(window, { AgentFlow, ParticleField, LogoMarquee, Counter });
