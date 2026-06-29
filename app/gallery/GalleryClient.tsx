"use client";

import { useState } from "react";
import Image from "next/image"; // Added Next.js Image import
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_CATEGORIES } from "@/lib/data";

// Updated data array with image paths
const galleryItems = [
  {
    id: 1,
    title: "Grand Study Hall — Row View",
    category: "Study Halls",
    span: "col-span-2 row-span-2",
    image: "/home/library-hall.jpg",
  },
  {
    id: 2,
    title: "Study Hall — Evening Light",
    category: "Study Halls",
    span: "col-span-1 row-span-1",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Private Cabin Interior",
    category: "Cabins",
    span: "col-span-1 row-span-1",
    image:
      "/home/cabin.jpg",
  },
  {
    id: 4,
    title: "Private Cabin — Door View",
    category: "Cabins",
    span: "col-span-1 row-span-2",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Reading Lounge — Corner",
    category: "Reading Lounge",
    span: "col-span-1 row-span-1",
    image:
      "/home/reading-area.jpg",
  },
  {
    id: 6,
    title: "Book Collection — Shelf",
    category: "Reading Lounge",
    span: "col-span-1 row-span-1",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    title: "Reception Desk",
    category: "Facilities",
    span: "col-span-1 row-span-1",
    image:
      "/home/reception.jpg",
  },
  {
    id: 8,
    title: "RO Water Station",
    category: "Facilities",
    span: "col-span-1 row-span-1",
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 9,
    title: "Digital Lockers",
    category: "Facilities",
    span: "col-span-2 row-span-1",
    image:
      "/home/locker.jpg",
  },
  {
    id: 10,
    title: "Workshop Event — March 2026",
    category: "Events",
    span: "col-span-1 row-span-1",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 11,
    title: "UPSC Strategy Session",
    category: "Events",
    span: "col-span-1 row-span-1",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 12,
    title: "Parking Area — Morning",
    category: "Facilities",
    span: "col-span-1 row-span-1",
    image:
      "/home/parking.jpg",
  },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(
    null,
  );

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Our Space in <span className="italic text-gold-400">Photos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-xl max-w-xl mx-auto"
          >
            Take a visual tour of every corner of Athenaeum Study Hall.
          </motion.p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                    ? "bg-navy-950 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[150px]"
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-200`}
                  onClick={() => setLightbox(item)}
                >
                  {/* Next.js Image Component replacing Gradient */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark overlay for text readability & hover effects */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                  {/* Zoom Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <ZoomIn className="w-5 h-5 text-navy-950" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="text-white text-xs font-medium line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />

              {/* Absolute Text Banner on top of image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/60 to-transparent text-center">
                <p className="text-xs uppercase tracking-widest text-gold-400 mb-1">
                  {lightbox.category}
                </p>
                <h3 className="font-display font-bold text-xl md:text-3xl text-white">
                  {lightbox.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
