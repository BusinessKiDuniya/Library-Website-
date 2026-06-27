"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Wifi, Volume2, BookOpen, Award, BookMarked } from "lucide-react";
import { STATS } from "@/lib/data";

const floatingBadges = [
  { icon: Volume2,  text: "Silent Zone",    pos: "top-[25%] left-[5%]",    delay: 1.2 },
  { icon: Wifi,     text: "1Gbps Wi-Fi",    pos: "top-[32%] right-[5%]",   delay: 1.35 },
  { icon: Users,    text: "4,800+ Members", pos: "bottom-[32%] left-[4%]", delay: 1.5 },
  { icon: Star,     text: "4.9★ Rating",    pos: "bottom-[28%] right-[6%]",delay: 1.65 },
];

const statIcons = [Users, BookOpen, Award, BookMarked];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
        style={{ background: "#0A0F1E" }}
      >
        {/* ── Deep background gradient ── */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, #1a3a8a 0%, #0A0F1E 75%)",
          }} />
          {/* Animated colour wash */}
          <motion.div
            className="absolute inset-0 opacity-20 pointer-events-none"
            animate={{
              background: [
                "radial-gradient(ellipse 50% 40% at 15% 55%, #059669 0%, transparent 70%)",
                "radial-gradient(ellipse 50% 40% at 85% 45%, #1E3A8A 0%, transparent 70%)",
                "radial-gradient(ellipse 50% 40% at 50% 15%, #D4A843 0%, transparent 70%)",
                "radial-gradient(ellipse 50% 40% at 15% 55%, #059669 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* ── Soft blur orbs ── */}
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-blue-600/20 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        {/* ── Subtle dot grid ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Floating badges (desktop only) ── */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 pointer-events-none hidden lg:block">
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.75, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: badge.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute ${badge.pos} float`}
              style={{ animationDelay: `${i * 1.4}s` }}
            >
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 text-sm font-semibold text-navy-950">
                <badge.icon className="w-4 h-4 text-navy-950 shrink-0" />
                <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                  {badge.text}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Main Hero Content ── */}
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-10 text-center px-4 sm:px-6 w-full max-w-4xl mx-auto my-auto"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-gold-500/30 bg-gold-500/10 mx-auto w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span
              className="text-gold-400 text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Noida&apos;s #1 Premium Study Library
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
              className="text-white text-[clamp(2.4rem,6.5vw,4.8rem)]"
            >
              Your Perfect
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(120deg, #f0c060 0%, #D4A843 40%, #e8b84b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Study Space
              </span>
              <br />
              Starts Here.
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans"
          >
            A premium, silent, air-conditioned study library designed for serious
            learners — students, professionals, and lifelong readers who demand
            the best environment for deep work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/booking" className="btn-gold group">
              Book a Seat Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/membership" className="btn-outline-white">
              View Membership Plans
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
        >
          <motion.div
            className="flex flex-col items-center gap-1 cursor-pointer group"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.4)" }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── standalone stats band separating hero from next section ── */}
      <section 
        className="relative z-10 w-full py-8 border-y"
        style={{ 
          background: "linear-gradient(135deg, #D4A843 0%, #B88E2F 100%)",
          borderColor: "rgba(255,255,255,0.15)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div 
                  key={stat.label}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left px-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-950/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-navy-950" />
                  </div>
                  <div>
                    <div 
                      className="font-bold text-navy-950 leading-none mb-1 font-display"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                    >
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div 
                      className="text-navy-950/80 font-semibold tracking-wider font-sans uppercase"
                      style={{ fontSize: "0.65rem" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
