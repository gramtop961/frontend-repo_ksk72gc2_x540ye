import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521424159243-04b4b3b8cd69?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542736667-069246bdbc74?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Moments from the burrow
          </motion.h2>
          <p className="mt-2 text-slate-300">Coffee swirls, pastry crumbs, and capybaras being capybaras.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/60 backdrop-blur"
            >
              <img src={src} alt="Gallery" className="h-64 w-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
