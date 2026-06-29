"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FACILITIES } from "@/lib/data";
import Image from "next/image";

export default function FacilitiesShowcase() {
  return (
    <section className="section-padding bg-[#FAFAFA] relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-badge mb-4">Our Facilities</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4">
            Built for <span className="italic text-gold-500">Serious</span> Learners
          </h2>
          <p className="text-gray-500 text-lg">
            Every space is thoughtfully designed. Every detail is intentional.
            Every facility serves your focus.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="space-y-24">
          {FACILITIES.map((facility, i) => (
            <FacilityRow key={facility.id} facility={facility} index={i} reverse={i % 2 !== 0} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href="/facilities" className="btn-primary inline-flex">
            Explore All Facilities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FacilityRow({
  facility,
  index,
  reverse,
}: {
  facility: typeof FACILITIES[0];
  index: number;
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""
        }`}
    >
      {/* Image */}
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 group">
          {/* Placeholder image with gradient */}
          {
            facility.image ? (
              <Image src={facility.image} fill alt={facility.imageAlt} />

            ) :
              (

                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: [
                      "linear-gradient(135deg, #0A0F1E 0%, #1E3A8A 50%, #059669 100%)",
                      "linear-gradient(135deg, #064e3b 0%, #059669 50%, #D4A843 100%)",
                      "linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #0A0F1E 100%)",
                      "linear-gradient(135deg, #7c2d12 0%, #b45309 50%, #D4A843 100%)",
                      "linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #059669 100%)",
                      "linear-gradient(135deg, #0A0F1E 0%, #374151 50%, #6b7280 100%)",
                    ][index % 6],
                  }}
                />
              )
          }
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/80">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium opacity-70">{facility.title}</p>
            </div>
          </div>
          {/* Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-navy-950 uppercase tracking-widest">
              {facility.tag}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? "lg:order-1" : ""}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-badge mb-4">{facility.tag}</span>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-navy-950 mb-2 mt-4">
            {facility.title}
          </h3>
          <p className="text-gold-500 font-medium italic mb-4">{facility.subtitle}</p>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {facility.description}
          </p>
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 text-navy-950 font-semibold group hover:text-gold-600 transition-colors"
          >
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
