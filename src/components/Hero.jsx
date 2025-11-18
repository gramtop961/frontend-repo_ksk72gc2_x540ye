import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-rose-400/20 blur-3xl" />
        <div className="absolute right-0 -top-20 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            A cozy hideout where capybaras and coffee collide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 text-lg text-slate-300"
          >
            Sink into slow mornings, caramel sunsets, and cinnamon steam. Hand-poured brews, soft pastries, and occasional capybara cameos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#menu" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition">Explore Menu</a>
            <a href="#visit" className="rounded-xl border border-white/20 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">Book a Table</a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1920&auto=format&fit=crop"
              alt="Latte art"
              className="h-[440px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-slate-900/30" />
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1521424159243-04b4b3b8cd69?q=80&w=1400&auto=format&fit=crop"
            alt="Pastry"
            className="absolute -bottom-10 -left-10 w-52 rounded-2xl ring-4 ring-slate-900 shadow-xl"
          />

          <motion.img
            initial={{ opacity: 0, y: 20, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1400&auto=format&fit=crop"
            alt="Capybara"
            className="absolute -top-10 -right-8 w-60 rounded-2xl ring-4 ring-slate-900 shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
