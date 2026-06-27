"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E3A8A_0%,_#0A0F1E_60%)]" />
        <div className="section-container relative text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Frequently Asked <span className="italic text-gold-400">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-300 text-xl max-w-xl mx-auto">
            Everything you need to know before joining. Still have questions? Contact us.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container max-w-3xl mx-auto">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left" aria-expanded={openIndex === i}>
                  <span className="font-medium text-navy-950">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openIndex === i ? "bg-navy-950 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <motion.div animate={openIndex === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  initial={false} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
                  <p className="text-gray-500 text-sm leading-relaxed px-6 pb-6">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12 p-8 rounded-3xl bg-navy-950 text-white">
            <h3 className="font-display font-bold text-2xl mb-3">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">Our team responds within 2 hours during working hours.</p>
            <a href="/contact" className="btn-gold inline-flex">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
