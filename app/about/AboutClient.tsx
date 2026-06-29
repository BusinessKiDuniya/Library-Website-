"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Trophy, Users, BookOpen, Star } from "lucide-react";
import { TEAM, SITE } from "@/lib/data";
import Image from "next/image";

const values = [
  { icon: BookOpen, title: "Learning First", description: "Every decision we make puts the learner's experience at the centre. Nothing else." },
  { icon: Heart, title: "Genuine Care", description: "We care about every member's journey — not just their membership payment." },
  { icon: Star, title: "Uncompromising Quality", description: "Premium infrastructure, cleanliness, and service — maintained without exception." },
  { icon: Users, title: "Community", description: "We believe the right company of serious, motivated people accelerates your success." },
];

const timeline = [
  { year: "2019", title: "Founded", desc: "Athenaeum opens its doors with 40 seats in a 1,500 sq ft space in Sector 62." },
  { year: "2020", title: "Expansion", desc: "Despite the pandemic, we grew to 80 seats, adding private cabins and lockers." },
  { year: "2021", title: "1,000 Members", desc: "Hit a milestone of 1,000 registered members and launched the reading lounge." },
  { year: "2022", title: "Digital Upgrade", desc: "Installed 1Gbps leased line internet, upgraded to HD CCTV and digital lockers." },
  { year: "2023", title: "Full Capacity", desc: "Reached 120 seats, opened the refreshment zone, and added parking facilities." },
  { year: "2024", title: "Recognition", desc: "Rated Noida's #1 Study Library with 4.9★ across 4,800+ verified reviews." },
];

const achievements = [
  { value: "4,800+", label: "Happy Members" },
  { value: "4.9★", label: "Average Rating" },
  { value: "6+", label: "Years of Service" },
  { value: "120", label: "Study Seats" },
];

export default function AboutClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1E3A8A_0%,#0A0F1E_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="section-container relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 bg-gold-500/10 text-gold-400 mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Built by a Learner,
            <br />
            <span className="italic text-gold-400">For Learners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            Athenaeum was born from personal frustration — the absence of a truly premium, distraction-free study space in Noida.
            We built what we wished had existed.
          </motion.p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center py-8 px-4 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl text-navy-950 mb-2">{a.value}</div>
                <div className="text-sm text-gray-500 font-medium">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
            >
              <span className="section-badge mb-4">Our Story</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-6 mt-4">
                From Frustration
                <br />
                <span className="italic text-gold-500">to Foundation</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In 2019, our founder Rajesh Kumar was preparing for the UPSC civil services exam. 
                  He visited dozens of study halls in Noida — and found every single one lacking: poor infrastructure, 
                  noisy environments, unreliable internet, or outdated facilities.
                </p>
                <p>
                  So he did something bold. He rented a 1,500 sq ft space in Sector 62, invested everything into 
                  creating a study environment that matched international standards — ergonomic furniture, 
                  climate control, leased-line internet, and above all, a culture of absolute silence.
                </p>
                <p>
                  Word spread quickly. Within 6 months, the original 40 seats were consistently full. 
                  Today, Athenaeum is Noida&apos;s most trusted premium study library with 4,800+ members 
                  and a 4.9-star rating.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy-950 to-blue-900 relative">
                
                <Image src="/about/founder.jpg" alt="Founder" layout="fill" objectFit="cover" objectPosition="top" />
              </div>
              <div className="absolute border-2 border-red-300 -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-950 text-sm">Est. 2019</p>
                    <p className="text-gray-400 text-xs">{SITE.founded} · Noida, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden p-10 bg-navy-950 text-white"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To democratise access to premium study infrastructure in India — giving every serious learner 
                the environment, resources, and community they deserve to achieve their goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden p-10 bg-emerald-600 text-white"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">Our Vision</h3>
              <p className="text-emerald-50 leading-relaxed text-lg">
                To become India&apos;s most loved chain of premium study libraries — where every city has 
                an Athenaeum that transforms how India learns, prepares, and grows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge mb-4">Our Values</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="premium-card p-7 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-950/6 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/10 transition-colors duration-300">
                  <v.icon className="w-7 h-7 text-navy-950 group-hover:text-gold-600 transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-xl text-navy-950 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge mb-4">Our Journey</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              Six Years of <span className="italic text-gold-500">Excellence</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden lg:block" />
            <div className="space-y-8 lg:space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative lg:flex lg:gap-8 lg:items-center mb-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                    <div className="premium-card p-6 inline-block w-full lg:max-w-sm text-left">
                      <span className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1 block">{item.year}</span>
                      <h3 className="font-display font-semibold text-xl text-navy-950 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-px items-center justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md" />
                  </div>
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge mb-4">Our Team</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mt-4">
              The People Behind
              <span className="italic text-gold-500"> Athenaeum</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="premium-card p-7 text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-emerald-500 flex items-center justify-center mx-auto mb-5 text-white font-display font-bold text-2xl group-hover:scale-105 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-semibold text-lg text-navy-950 mb-1">{member.name}</h3>
                <p className="text-gold-500 text-xs font-medium uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy-950 mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Join 4,800+ members who made Athenaeum their second home. Book a seat or visit for a free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary inline-flex">
              Book a Seat <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline inline-flex">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
