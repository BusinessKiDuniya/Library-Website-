"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, PlayCircle } from "lucide-react";


export default function LibraryTour() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} className="section-padding bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-badge mb-4 inline-block"
          >
            Virtual Tour
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4"
          >
            Take a{" "}
            <span className="italic text-gold-500">Tour</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            See every corner of Athenaeum before you visit. Watch our 3-minute walkthrough and decide for yourself.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden aspect-video bg-navy-950 group cursor-pointer shadow-2xl"
          onClick={() => setPlaying(true)}
        >
          {/* Thumbnail gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-blue-900 to-emerald-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />

          {/* Play button */}
          {!playing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl mb-6 group-hover:bg-white transition-colors"
              >
                <Play className="w-8 h-8 text-navy-950 translate-x-0.5" />
              </motion.div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <PlayCircle className="w-4 h-4" />
                Watch 3-min Library Tour
              </div>
            </div>
          )}

          {playing && (
            
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ZNSA0NrDeb4?si=LIx-R8Dtlg0dxOje&autoplay=1&rel=0&modestbranding=1"
              title="Athenaeum Study Hall Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {/* Corner badge */}
          {!playing && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                3:00
              </span>
            </div>
          )}

          {/* Bottom overlay */}
          {!playing && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-white font-display font-semibold text-xl">Athenaeum Study Hall — Complete Tour</h3>
              <p className="text-white/60 text-sm mt-1">All facilities • Study halls • Cabins • Amenities</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
