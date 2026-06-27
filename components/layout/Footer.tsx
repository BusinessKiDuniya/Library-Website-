"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen, MapPin, Phone, Mail, Clock,
  ArrowUpRight, Heart, Send
} from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/data";

const footerLinks = {
  "Quick Links": NAV_LINKS,
  "Resources": [
    { label: "FAQ", href: "/faq" },
    { label: "Rules & Guidelines", href: "/rules" },
    { label: "Blog", href: "/blog" },
    { label: "Book a Seat", href: "/booking" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

// SVG social icons since lucide-react v1.21 removed brand icons
const socialLinks = [
  {
    href: SITE.social.instagram, label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: SITE.social.facebook, label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: SITE.social.twitter, label: "X (Twitter)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: SITE.social.youtube, label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-emerald-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-6 w-fit">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center transition-all group-hover:bg-gold-500/25">
                <BookOpen className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block leading-none">Athenaeum</span>
                <span className="text-[10px] uppercase tracking-widest text-gold-500 font-medium">Study Hall</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              A premium, silent, and modern study library in Noida. Designed for serious learners who demand the best environment for deep focus.
            </p>
            <div className="space-y-3">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1 group">
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hours + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-white/10 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-gold-500" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest">Working Hours</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between max-w-xs">
                <span>Monday – Saturday</span>
                <span className="text-white font-medium">{SITE.hours.weekday}</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Sunday</span>
                <span className="text-white font-medium">{SITE.hours.weekend}</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>National Holidays</span>
                <span className="text-yellow-400 font-medium">Closed</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Get study tips, new offers, and library updates in your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email" placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
              />
              <button type="submit" className="px-4 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-semibold text-sm hover:bg-gold-400 transition-colors flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            © {new Date().getFullYear()} {SITE.name}. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            in India.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/10 transition-all duration-200"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
