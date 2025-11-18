import { useState } from 'react'
import { Menu, X, Coffee, Leaf } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#visit', label: 'Visit' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <motion.span
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 10 }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-400 to-rose-400 text-slate-900 shadow-inner"
                >
                  <Coffee size={18} />
                </motion.span>
                <Leaf className="absolute -right-2 -top-2 text-emerald-300/80" size={16} />
              </div>
              <div>
                <p className="text-white font-semibold leading-none tracking-tight">Capybara Café</p>
                <p className="text-xs text-slate-300/70">slow sips • soft squeaks</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#visit" className="rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow hover:shadow-lg transition-shadow">Book a Table</a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-5 py-3 grid gap-3">
                  {links.map((l) => (
                    <a key={l.href} href={l.href} className="text-slate-200/90" onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  ))}
                  <a href="#visit" className="rounded-xl bg-white text-slate-900 px-4 py-2 font-medium text-center">Book a Table</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
