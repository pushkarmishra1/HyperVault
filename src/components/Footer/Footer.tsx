import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowUp, PhoneCall, Mail, MapPin } from 'lucide-react';
import { BRANDS_INFO } from '../../data/brands';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#030303] text-white pt-20 pb-12 border-t border-white/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-zinc-900 border border-red-500/40 flex items-center justify-center font-serif-luxury font-black text-white text-xl shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  HV
                </div>
                <span className="font-serif-luxury text-3xl font-bold tracking-widest text-white uppercase">
                  HYPER<span className="text-red-500">VAULT</span>
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-sans max-w-sm leading-relaxed">
                Where machines become art. Quality luxury automotive digital pavilion dedicated to hypercar engineering, bespoke tailoring, and acoustic mastery.
              </p>
            </div>

            <div className="mt-8 text-[10px] font-mono-tech text-zinc-400 uppercase tracking-widest leading-relaxed">
              OFFICIAL PAVILION • 📍 INDIA (MAIN HQ) • MUNICH • USA • WEISSACH • ITALY
            </div>
          </div>

          {/* BRANDS LIST COLUMN */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-red-400 tracking-widest mb-4">
              9 FLAGSHIP PAVILIONS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech text-zinc-300">
              {BRANDS_INFO.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('campus-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 200);
                  }}
                  className="text-left hover:text-red-400 transition-colors uppercase font-medium cursor-pointer py-1.5 min-h-[36px] flex items-center"
                >
                  • {b.id}
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT & ATELIER COLUMN */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono-tech uppercase font-bold text-amber-400 tracking-widest mb-4">
                VIP CONCIERGE ATELIER
              </h4>
              <div className="space-y-2.5 text-xs font-mono-tech text-zinc-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">📍 India (Main Headquarters)</span>
                    <span className="text-[11px] text-zinc-400">Somewhere in india</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>+91 77XXXXXXXX / +49 89 2080 3000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>concierge@hypervault.com</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 self-start px-4 py-2.5 rounded-xl bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/50 text-xs font-mono-tech uppercase font-bold text-zinc-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono-tech text-zinc-400 uppercase tracking-widest gap-4">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>© 2026 HYPERVAULT PAVILION. ALL RIGHTS RESERVED.</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-red-400 font-bold">DESIGNED & DEVELOPED BY PUSHKAR MISHRA</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              PRIVACY POLICY
            </Link>
            <Link
              to="/terms"
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              TERMS OF SERVICE
            </Link>
            <Link
              to="/security-audit"
              className="hover:text-red-400 transition-colors cursor-pointer"
            >
              SECURITY AUDIT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
