import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Volume2, Calendar, GitCompare, Search, Menu, X, ChevronRight, Shield, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BRANDS_INFO } from '../../data/brands';
import { BrandInfo } from '../../types/campus';

interface NavbarProps {
  onOpenTestDrive?: () => void;
  onOpenAudioEngine?: () => void;
  onOpenCompare?: () => void;
  onSelectBrand?: (brand: BrandInfo) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTestDrive,
  onOpenAudioEngine,
  onOpenCompare,
  onSelectBrand,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandDrawerOpen, setIsBrandDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, hash?: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/' && path === '/') {
      navigate('/');
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else if (hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="group flex items-center gap-3 cursor-pointer text-left focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-zinc-900 to-black border border-red-500/40 flex items-center justify-center font-serif-luxury font-black text-white text-xl shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:scale-105 transition-transform">
              HV
            </div>
            <div>
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold tracking-widest text-white uppercase group-hover:text-red-400 transition-colors">
                HYPER<span className="text-red-500 font-normal">VAULT</span>
              </span>
              <span className="block text-[9px] font-mono-tech tracking-[0.25em] text-zinc-400 uppercase">
                LUXURY AUTOMOTIVE PAVILION
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono-tech tracking-wider text-zinc-300 uppercase">
            <button
              onClick={() => handleNavClick('/', 'campus-section')}
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-red-500" />
              <span>BRAND CAMPUS</span>
            </button>

            <button
              onClick={() => setIsBrandDrawerOpen(!isBrandDrawerOpen)}
              className="hover:text-red-400 transition-colors flex items-center gap-1.5 cursor-pointer relative"
            >
              <span>SHOWROOM SUITES</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-600/30 text-red-400 border border-red-500/40">
                9
              </span>
            </button>

            <button
              onClick={() => handleNavClick('/collection')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              FULL CATALOG
            </button>

            <button
              onClick={() => handleNavClick('/', 'bespoke-section')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              BESPOKE STUDIO
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              HERITAGE
            </button>
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenAudioEngine && (
              <button
                onClick={onOpenAudioEngine}
                title="Engine Acoustic Simulator"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-600/20 text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-red-400" />
              </button>
            )}

            {onOpenCompare && (
              <button
                onClick={onOpenCompare}
                title="Compare Supercars"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-600/20 text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <GitCompare className="w-4 h-4 text-amber-400" />
              </button>
            )}

            {onOpenTestDrive && (
              <button
                onClick={onOpenTestDrive}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK TEST DRIVE</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Brand Drawer Quick Dropdown */}
        <AnimatePresence>
          {isBrandDrawerOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-7xl mx-auto mt-3 px-4 sm:px-6 lg:px-8 hidden lg:block"
            >
              <div className="glass-panel border border-red-500/30 rounded-2xl p-4 grid grid-cols-3 md:grid-cols-9 gap-2 shadow-2xl">
                {BRANDS_INFO.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setIsBrandDrawerOpen(false);
                      if (onSelectBrand) {
                        onSelectBrand(b);
                      } else {
                        handleNavClick('/', 'campus-section');
                      }
                    }}
                    className="p-3 rounded-xl bg-white/5 hover:bg-red-600/20 border border-white/5 hover:border-red-500/40 text-center transition-all cursor-pointer group"
                  >
                    <div className="text-[10px] font-mono-tech text-zinc-400 group-hover:text-red-400 font-bold uppercase truncate">
                      {b.name.replace(' Pavilion', '').replace(' Wing', '').replace(' Hall', '').replace(' Sanctuary', '').replace(' Atrium', '').replace(' Gallery', '').replace(' Atelier', '')}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-30 bg-black/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-3 text-sm font-mono-tech uppercase tracking-wider text-zinc-300">
              <button
                onClick={() => handleNavClick('/', 'campus-section')}
                className="text-left py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/40 hover:text-red-400 flex items-center justify-between min-h-[44px]"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-red-500" />
                  <span>BRAND CAMPUS</span>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              {/* Showroom Suites Quick Brand Selectors */}
              <div className="py-2 border-y border-white/10 my-1">
                <span className="text-[10px] text-zinc-400 font-mono font-bold block mb-2 px-1">
                  SHOWROOM SUITES (9 PAVILIONS)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {BRANDS_INFO.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (onSelectBrand) {
                          onSelectBrand(b);
                        } else {
                          handleNavClick('/', 'campus-section');
                        }
                      }}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/40 text-center min-h-[44px] flex flex-col justify-center items-center"
                    >
                      <span className="text-[10px] font-mono-tech text-zinc-300 font-bold uppercase truncate max-w-full">
                        {b.name.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavClick('/collection')}
                className="text-left py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/40 hover:text-red-400 flex items-center justify-between min-h-[44px]"
              >
                <span>FULL VEHICLE COLLECTION</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              <button
                onClick={() => handleNavClick('/', 'bespoke-section')}
                className="text-left py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/40 hover:text-red-400 flex items-center justify-between min-h-[44px]"
              >
                <span>BESPOKE STUDIO</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              <button
                onClick={() => handleNavClick('/about')}
                className="text-left py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/40 hover:text-red-400 flex items-center justify-between min-h-[44px]"
              >
                <span>HERITAGE & ABOUT</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              <button
                onClick={() => handleNavClick('/contact')}
                className="text-left py-3 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/40 hover:text-red-400 flex items-center justify-between min-h-[44px]"
              >
                <span>VIP CONCIERGE & CONTACT</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </button>

              <div className="pt-2 flex flex-col gap-3">
                {onOpenCompare && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenCompare();
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-amber-500/30 text-xs font-bold text-amber-400 text-center flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <GitCompare className="w-4 h-4 text-amber-400" />
                    <span>COMPARE SUPERCARS</span>
                  </button>
                )}

                {onOpenAudioEngine && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenAudioEngine();
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-center flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Volume2 className="w-4 h-4 text-red-400" />
                    <span>AUDIO ENGINE SIMULATOR</span>
                  </button>
                )}

                {onOpenTestDrive && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenTestDrive();
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs tracking-wider uppercase text-center shadow-lg min-h-[44px] flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK VIP TEST DRIVE</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
