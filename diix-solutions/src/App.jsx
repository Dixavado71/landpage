import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Menu, X, ChevronDown, Check, Zap, ShoppingCart, Truck, 
  MessageCircle, Instagram, Facebook, Bot, TrendingUp, Users,
  CreditCard, Package, Store, Monitor, ArrowRight, Play, Star,
  Clock, Target, BarChart3, ChefHat, FileText, Layers, Sparkles, Send
} from 'lucide-react'
import './App.css'

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>{children}</motion.div>
  )
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 20); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll) }, [])
  const navLinks = [{ name: 'Recursos', href: '#recursos' }, { name: 'Benefícios', href: '#beneficios' }, { name: 'Planos', href: '#planos' }, { name: 'FAQ', href: '#faq' }]
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"><span className="text-white font-bold text-xl">D</span></div>
            <span className="text-xl font-bold font-display text-white">Diix Solutions</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">{navLinks.map((link) => (<a key={link.name} href={link.href} className="text-dark-300 hover:text-white transition-colors text-sm font-medium">{link.name}</a>))}</nav>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-dark-300 hover:text-white transition-colors text-sm font-medium">Login</button>
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary-500/25">Começar agora</button>
          </div>
          <button className="md:hidden text-dark-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {mobileMenuOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden bg-dark-900 border-t border-dark-800"><div className="px-4 py-6 space-y-4">{navLinks.map((link) => (<a key={link.name} href={link.href} className="block text-dark-300 hover:text-white transition-colors py-2">{link.name}</a>))}<div className="pt-4 border-t border-dark-800 space-y-3"><button className="w-full text-dark-300 hover:text-white transition-colors py-2 text-left">Login</button><button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-3 rounded-lg font-semibold">Começar agora</button></div></div></motion.div>)}
    </header>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-dark-950 to-dark-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-dark-800/50 border border-dark-700 rounded-full px-4 py-2 mb-6"><Sparkles size={16} className="text-accent-400" /><span className="text-sm text-dark-300">Plataforma completa de e-commerce + IA</span></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6"><span className="bg-gradient-to-r from-white via-dark-100 to-dark-300 bg-clip-text text-transparent">Una loja virtual,</span><br /><span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">vendas e automação</span><br /><span className="bg-gradient-to-r from-white via-dark-100 to-dark-300 bg-clip-text text-transparent">em uma plataforma</span></h1>
              <p className="text-lg text-dark-400 mb-8 max-w-xl mx-auto lg:mx-0">A Diix Solutions é a plataforma SaaS completa que combina e-commerce, automação de atendimento com IA, marketing e gestão para você vender mais e economizar tempo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2">Começar agora<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></button>
                <button className="group bg-dark-800/50 hover:bg-dark-800 border border-dark-700 hover:border-dark-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2"><Play size={20} className="text-primary-400" />Conhecer plataforma</button>
              </div>
              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">{[1, 2, 3, 4].map((i) => (<div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-700 to-dark-800 border-2 border-dark-950 flex items-center justify-center text-xs font-medium text-dark-300">{String.fromCharCode(64 + i)}</div>))}</div>
                <div><div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map((i) => (<Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />))}</div><p className="text-sm text-dark-400">+2.000 empresas confiam</p></div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl border border-dark-700 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6"><div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div><div className="text-sm text-dark-400">Painel Diix</div></div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700"><div className="flex items-center gap-2 mb-2"><ShoppingCart size={16} className="text-primary-400" /><span className="text-xs text-dark-400">Vendas hoje</span></div><div className="text-2xl font-bold text-white">R$ 4.259</div><div className="text-xs text-green-400 mt-1">+23% vs ontem</div></div>
                <div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700"><div className="flex items-center gap-2 mb-2"><Users size={16} className="text-accent-400" /><span className="text-xs text-dark-400">Clientes ativos</span></div><div className="text-2xl font-bold text-white">847</div><div className="text-xs text-green-400 mt-1">+12% essa semana</div></div>
              </div>
              <div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700 mb-4"><div className="flex items-center justify-between mb-4"><span className="text-sm text-dark-400">Performance de vendas</span><TrendingUp size={16} className="text-primary-400" /></div><div className="flex items-end gap-2 h-24">{[40, 65, 45, 80, 55, 90, 70].map((h, i) => (<div key={i} className="flex-1 bg-gradient-to-t from-primary-500/20 to-primary-500 rounded-t" style={{ height: `${h}%` }} />))}</div></div>
              <div className="flex items-center justify-between"><span className="text-xs text-dark-400">Canais ativos</span><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center"><MessageCircle size={14} className="text-green-400" /></div><div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center"><Instagram size={14} className="text-pink-400" /></div><div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center"><Facebook size={14} className="text-blue-400" /></div></div></div>
            </div>
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 bg-dark-800 rounded-xl border border-dark-700 p-3 shadow-xl"><Bot size={24} className="text-accent-400" /></motion.div>
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-4 -left-4 bg-dark-800 rounded-xl border border-dark-700 p-3 shadow-xl"><Zap size={24} className="text-yellow-400" /></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
