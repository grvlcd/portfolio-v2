"use client";

import { motion } from "framer-motion";

function smoothScrollToAnchor(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (href?.startsWith("#")) {
    e.preventDefault();
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const itemFast = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

/** Floating orbs for background — slow drift */
function FloatingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 -right-20 w-[min(80vw,500px)] h-[min(80vw,500px)] rounded-full opacity-20 blur-[80px]"
        style={{ background: "var(--accent)" }}
        aria-hidden
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 1.02, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-20 w-[min(60vw,350px)] h-[min(60vw,350px)] rounded-full opacity-15 blur-[60px]"
        style={{ background: "var(--electric)" }}
        aria-hidden
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 20, -15, 0],
          scale: [1, 1.05, 1.1, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/** Decorative floating shapes */
function FloatingShapes() {
  const shapes = [
    { size: 4, x: "15%", y: "20%", color: "var(--accent)", delay: 0 },
    { size: 6, x: "85%", y: "30%", color: "var(--electric)", delay: 1 },
    { size: 3, x: "80%", y: "70%", color: "var(--accent-soft)", delay: 2 },
    { size: 5, x: "10%", y: "75%", color: "var(--electric)", delay: 0.5 },
    { size: 4, x: "50%", y: "15%", color: "var(--accent)", delay: 1.5 },
    { size: 3, x: "45%", y: "85%", color: "var(--electric)", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-current opacity-30"
          style={{
            width: s.size * 8,
            height: s.size * 8,
            left: s.x,
            top: s.y,
            color: s.color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.25,
            scale: 1,
            y: [0, -12, 0],
            rotate: [0, 180],
          }}
          transition={{
            opacity: { delay: 0.8 + s.delay, duration: 0.6 },
            scale: { delay: 0.8 + s.delay, duration: 0.6 },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: s.delay },
            rotate: { duration: 20 + i * 2, repeat: Infinity, ease: "linear", delay: s.delay },
          }}
        />
      ))}
    </div>
  );
}

/** Subtle grid overlay */
function GridOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] bg-[size:min(80px,12vw)_min(80px,12vw)]"
      aria-hidden
    />
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 relative">
      <FloatingOrbs />
      <GridOverlay />
      <FloatingShapes />

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="font-semibold text-[var(--accent)] tracking-[0.35em] uppercase text-sm sm:text-base mb-4"
        >
          Portfolio
        </motion.p>
        <h1 className="font-black text-[var(--foreground)] leading-[0.92] tracking-tight max-w-4xl">
          <motion.span
            variants={item}
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Hello,
          </motion.span>
          <motion.span
            variants={item}
            className="block mt-2 gradient-text animate-gradient-shift"
          >
            I&apos;m Christian.
          </motion.span>
        </h1>
        <motion.p
          variants={itemFast}
          className="mt-8 max-w-lg text-[var(--foreground)]/80 font-normal text-lg sm:text-xl leading-relaxed"
        >
          Results-driven Full Stack Developer. Architecting scalable applications,
          implementing efficient solutions, and building high-performance apps with
          MERN, Laravel, Next.js, and Flutter.
        </motion.p>
        <motion.div variants={itemFast} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#experience"
            onClick={smoothScrollToAnchor}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "var(--accent)",
              color: "white",
              boxShadow: "0 0 40px var(--glow)",
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={smoothScrollToAnchor}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider border-2 border-[var(--foreground)]/30 text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--foreground)]/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-12 rounded-full bg-[var(--foreground)]/30"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
