import { motion } from 'framer-motion'
import { Coffee, Croissant, IceCream, Heart } from 'lucide-react'

const items = [
  {
    icon: Coffee,
    title: 'Signature Brews',
    desc: 'Single-origin pours and playful seasonal specials, crafted with care.'
  },
  {
    icon: Croissant,
    title: 'Fresh Pastries',
    desc: 'Flaky, buttery, and baked daily. Pair perfectly with any cup.'
  },
  {
    icon: IceCream,
    title: 'Capy Sundaes',
    desc: 'Creamy treats inspired by the gentlest giants of the rodent world.'
  },
  {
    icon: Heart,
    title: 'Kind Vibes',
    desc: 'A space for slowing down, smiling often, and staying a while.'
  },
]

export default function Features() {
  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Sip. Snack. Savor.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-slate-300"
          >
            A playful menu with a gentle soul. Crafted for comfort and curiosity.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-900">
                <item.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
