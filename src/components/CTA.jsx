import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="visit" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-emerald-400/10 via-rose-400/10 to-amber-300/10 p-10 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white"
              >
                Reserve a cozy corner
              </motion.h3>
              <p className="mt-2 text-slate-200">Bring a friend or a book. We’ll bring the warmth.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input placeholder="Name" className="rounded-xl bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 outline-none" />
              <input type="date" className="rounded-xl bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 outline-none" />
              <button className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition">Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
