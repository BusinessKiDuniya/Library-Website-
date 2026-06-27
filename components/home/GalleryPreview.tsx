"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ZoomIn } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Main Study Hall", tag: "Study Hall", span: "col-span-2 row-span-2", gradient: "from-navy-950 to-blue-900" },
  { id: 2, title: "Private Cabin", tag: "Cabin", span: "col-span-1 row-span-1", gradient: "from-emerald-900 to-teal-900" },
  { id: 3, title: "Reading Lounge", tag: "Library", span: "col-span-1 row-span-1", gradient: "from-amber-900 to-orange-900" },
  { id: 4, title: "Reception Area", tag: "Reception", span: "col-span-1 row-span-1", gradient: "from-purple-900 to-indigo-900" },
  { id: 5, title: "Wi-Fi Setup", tag: "Facilities", span: "col-span-1 row-span-1", gradient: "from-cyan-900 to-blue-900" },
  { id: 6, title: "Locker Room", tag: "Security", span: "col-span-1 row-span-2", gradient: "from-slate-900 to-gray-800" },
  { id: 7, title: "Waiting Area", tag: "Lounge", span: "col-span-1 row-span-1", gradient: "from-rose-900 to-pink-900" },
];

export default function GalleryPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-badge mb-4 inline-block"
            >
              Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl text-navy-950"
            >
              See It to{" "}
              <span className="italic text-gold-500">Believe It</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link href="/gallery" className="btn-outline inline-flex whitespace-nowrap">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-3 gap-3 auto-rows-[160px]"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
              onClick={() => setLightboxItem(item)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-navy-950" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white/60 text-xs font-medium uppercase tracking-wider block mb-0.5">{item.tag}</span>
                <span className="text-white font-semibold text-sm">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full h-full bg-gradient-to-br ${lightboxItem.gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-2">{lightboxItem.tag}</p>
                  <h3 className="font-display font-bold text-3xl">{lightboxItem.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
