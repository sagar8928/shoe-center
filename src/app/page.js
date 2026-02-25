'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Wind } from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 },
  },
  viewport: { once: true },
};

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-600">
              New Collection 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Step Into <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experience the perfect blend of comfort, style, and performance with
            our revolutionary footwear collection.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40 transition-all duration-300"
          >
            Scroll Down
            {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
          </motion.button>
        </motion.div>
      </section>

      {/* Feature 1 - Lightweight */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <motion.div {...fadeInLeft} className="space-y-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30"
            >
              <Wind className="w-8 h-8 text-white" />
            </motion.div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Lightweight
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6"
              />
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Upper mesh material provides proper ventilation and reduction in
              the weight of the shoes.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-gray-900 font-semibold group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div {...fadeInRight} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/assests/sneakers1.jpg"
                  alt="Lightweight shoes"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Premium Quality
                  </p>
                  <p className="text-xs text-gray-500">Certified Materials</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature 2 - Flexibility (Reversed) */}
      <section id="sports" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <motion.div {...fadeInLeft} className="relative group lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/assests/sportshoe1.jpg"
                  alt="Flexible shoes"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-lg">⚡</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    High Performance
                  </p>
                  <p className="text-xs text-gray-500">Athletic Grade</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...fadeInRight} className="space-y-6 lg:order-2">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/30"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Flexibility
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"
              />
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Soft, flexible soles allow the walker to push off easily with each
              step.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-gray-900 font-semibold group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Feature 3 - Durability */}
      <section id="sneakers" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <motion.div {...fadeInLeft} className="space-y-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-500/30"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Durability
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6"
              />
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              High-quality rubber outsole ensures long-lasting wear even under
              heavy use.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-gray-900 font-semibold group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div {...fadeInRight} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/assests/sneakers.jpg"
                  alt="Durable shoes"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-lg">🛡️</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Built to Last
                  </p>
                  <p className="text-xs text-gray-500">5 Year Warranty</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="bg-gray-900 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                value: '50K+',
                label: 'Happy Customers',
                color: 'from-white to-gray-400',
              },
              {
                value: '100%',
                label: 'Satisfaction Rate',
                color: 'from-orange-400 to-red-400',
              },
              {
                value: '24/7',
                label: 'Support Available',
                color: 'from-blue-400 to-cyan-400',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="space-y-2"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20 animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl w-full mx-6"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl hover:border-white/20 transition-colors duration-500">
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 mb-6 shadow-lg shadow-orange-500/30"
              >
                <span className="text-3xl">👟</span>
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-400">
                We would love to hear from you. Send us a message!
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 text-xl">🏢</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Company</p>
                  <p className="text-white font-semibold">
                    Shoe Center Pvt. Ltd.
                  </p>
                </div>
              </motion.div>

              <motion.a
                href="mailto:support@shoecenter.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 text-xl">✉️</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    support@shoecenter.com
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </motion.a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Shoe Center. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
