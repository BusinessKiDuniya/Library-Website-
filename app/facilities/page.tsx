import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FACILITIES, FEATURES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Facilities — Premium Study Infrastructure",
  description:
    "Explore all Athenaeum Study Hall facilities: Study Hall, Private Cabins, Reading Lounge, AC, Wi-Fi, CCTV, Lockers, Parking, and more.",
};

export default function FacilitiesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            World-Class <span className="italic text-gold-400">Facilities</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Every amenity designed with purpose. Every space built for your success.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container space-y-24">
          {FACILITIES.map((facility, i) => (
            <div key={facility.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group"
                  style={{ background: `linear-gradient(135deg, ${["#0A0F1E, #1E3A8A", "#064e3b, #059669", "#1e1b4b, #4338ca", "#7c2d12, #b45309", "#0c4a6e, #0284c7", "#0A0F1E, #374151"][i % 6]})` }}>
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <div className="text-center text-white/50">
                      <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">{["📚", "📖", "🏢", "🛎️", "☕", "🚗"][i % 6]}</span>
                      </div>
                      <p className="text-sm font-medium">{facility.title}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-navy-950 uppercase tracking-widest">{facility.tag}</span>
                  </div>
                </div>
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="section-badge mb-4">{facility.tag}</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-950 mb-2 mt-4">{facility.title}</h2>
                <p className="text-gold-500 font-medium italic mb-4">{facility.subtitle}</p>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="section-badge mb-4">All Amenities</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              Everything <span className="italic text-gold-500">Included</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="premium-card p-5 text-center group">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-500/20 transition-colors">
                  <span className="text-gold-600 text-lg">✓</span>
                </div>
                <h4 className="font-semibold text-navy-950 text-sm">{f.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="section-container text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Experience It In Person</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">Come in for a free 3-hour trial and see all our facilities first-hand.</p>
          <Link href="/booking" className="btn-gold inline-flex">Book Free Trial <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
