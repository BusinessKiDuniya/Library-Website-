"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_CATEGORIES } from "@/lib/data";

const galleryItems = [
  { id: 1, title: "Grand Study Hall — Row View", category: "Study Halls", gradient: "from-navy-950 to-blue-900", span: "col-span-2 row-span-2" },
  { id: 2, title: "Study Hall — Evening Light", category: "Study Halls", gradient: "from-blue-900 to-indigo-900", span: "col-span-1 row-span-1" },
  { id: 3, title: "Private Cabin Interior", category: "Cabins", gradient: "from-slate-800 to-navy-950", span: "col-span-1 row-span-1" },
  { id: 4, title: "Private Cabin — Door View", category: "Cabins", gradient: "from-gray-800 to-slate-900", span: "col-span-1 row-span-2" },
  { id: 5, title: "Reading Lounge — Corner", category: "Reading Lounge", gradient: "from-amber-900 to-orange-900", span: "col-span-1 row-span-1" },
  { id: 6, title: "Book Collection — Shelf", category: "Reading Lounge", gradient: "from-yellow-800 to-amber-900", span: "col-span-1 row-span-1" },
  { id: 7, title: "Reception Desk", category: "Facilities", gradient: "from-emerald-900 to-teal-900", span: "col-span-1 row-span-1" },
  { id: 8, title: "RO Water Station", category: "Facilities", gradient: "from-cyan-900 to-blue-900", span: "col-span-1 row-span-1" },
  { id: 9, title: "Digital Lockers", category: "Facilities", gradient: "from-purple-900 to-indigo-900", span: "col-span-2 row-span-1" },
  { id: 10, title: "Workshop Event — March 2026", category: "Events", gradient: "from-rose-900 to-pink-900", span: "col-span-1 row-span-1" },
  { id: 11, title: "UPSC Strategy Session", category: "Events", gradient: "from-fuchsia-900 to-purple-900", span: "col-span-1 row-span-1" },
  { id: 12, title: "Parking Area — Morning", category: "Facilities", gradient: "from-slate-900 to-gray-800", span: "col-span-1 row-span-1" },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Our Space in <span className="italic text-gold-400">Photos</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-300 text-xl max-w-xl mx-auto">
            Take a visual tour of every corner of Athenaeum Study Hall.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat ? "bg-navy-950 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[150px]">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id} layout
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
                  onClick={() => setLightbox(item)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-500`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-navy-950" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-xs font-medium line-clamp-1">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              <div className={`w-full h-full bg-gradient-to-br ${lightbox.gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/70">
                  <p className="text-xs uppercase tracking-widest mb-2">{lightbox.category}</p>
                  <h3 className="font-display font-bold text-3xl">{lightbox.title}</h3>
                </div>
              </div>
              <button onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20">
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
