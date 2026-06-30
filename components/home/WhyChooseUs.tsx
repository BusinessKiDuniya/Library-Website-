"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FEATURES } from "@/lib/data";

const colorMap: Record<string, { bg: string; icon: string; glow: string }> = {
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", glow: "group-hover:shadow-emerald-100" },
  blue: { bg: "bg-blue-50", icon: "text-blue-600", glow: "group-hover:shadow-blue-100" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", glow: "group-hover:shadow-purple-100" },
  gold: { bg: "bg-amber-50", icon: "text-amber-600", glow: "group-hover:shadow-amber-100" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600", glow: "group-hover:shadow-teal-100" },
  cyan: { bg: "bg-cyan-50", icon: "text-cyan-600", glow: "group-hover:shadow-cyan-100" },
  red: { bg: "bg-red-50", icon: "text-red-600", glow: "group-hover:shadow-red-100" },
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", glow: "group-hover:shadow-indigo-100" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", glow: "group-hover:shadow-amber-100" },
  slate: { bg: "bg-slate-100", icon: "text-slate-600", glow: "group-hover:shadow-slate-100" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", glow: "group-hover:shadow-orange-100" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", glow: "group-hover:shadow-violet-100" },
};

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[feature.icon] as React.ComponentType<{ className?: string }>;
  const colors = colorMap[feature.color] ?? colorMap.slate;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group premium-card p-6 cursor-default ${colors.glow} hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]`}
    >
      <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
        {Icon && <Icon className={`w-6 h-6 ${colors.icon}`} />}
      </div>
      <h3 className="font-display font-semibold text-lg text-navy-950 mb-2 group-hover:text-navy-900 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#FAFAFA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge mb-4">Why Choose Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4"
          >
            Everything You Need to
            <span className="italic text-gold-500"> Excel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            We&apos;ve obsessed over every detail so you don&apos;t have to.
            From the air you breathe to the speed of your connection — it&apos;s all here.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
