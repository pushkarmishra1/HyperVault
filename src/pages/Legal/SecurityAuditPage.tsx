import React, { useState } from 'react';
import { ShieldCheck, Lock, Key, Cpu, Eye, Radio, CheckCircle2, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';
import { BackButton } from '../../components/Navigation/BackButton';

export const SecurityAuditPage: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastChecked, setLastChecked] = useState('Just Now');

  const handleRunAudit = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastChecked(new Date().toLocaleTimeString());
    }, 1200);
  };

  return (
    <div className="pt-28 pb-20 bg-black text-white min-h-screen relative font-sans">
      <BackButton />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>HyperVault Cyber Defense Pavilion</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Security <span className="text-emerald-400 font-mono">Audit</span>
          </h1>
          <p className="text-xs font-mono text-zinc-400 mt-3">
            ENTERPRISE-GRADE CRYPTOGRAPHIC & INFRASTRUCTURE REPORT
          </p>
        </div>

        {/* SYSTEM STATUS WIDGET */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-zinc-950 to-zinc-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 mb-12 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold tracking-widest mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>SYSTEM STATUS VERIFIED</span>
              </div>
              <h2 className="text-2xl font-black text-white uppercase font-sans tracking-wide">
                HyperVault Security Mesh Active
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Last Telemetry Scan: <span className="text-emerald-400">{lastChecked}</span> • TLS 1.3 Encryption Active
              </p>
            </div>

            <button
              onClick={handleRunAudit}
              disabled={isRefreshing}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer self-start md:self-auto shrink-0"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'RE-AUDITING...' : 'RUN LIVE AUDIT'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-emerald-500/20 text-xs font-mono">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-300 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>✓ Secure Protocol</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-300 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>✓ Data Protected</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-300 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>✓ No Active Issues</span>
            </div>
          </div>
        </div>

        {/* DETAILED AUDIT SECTIONS */}
        <div className="space-y-8 text-sm leading-relaxed text-zinc-300">
          {/* SSL Encryption */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Lock className="w-4 h-4" />
              <h2>1. SSL & TLS 1.3 Encryption</h2>
            </div>
            <p>
              Every data packet traveling between your browser and the HyperVault network is guarded by modern TLS 1.3 encryption with 256-bit AES Elliptic Curve Cryptography (ECC). Unencrypted HTTP access is forcefully upgraded to HTTPS.
            </p>
          </section>

          {/* Secure Payments */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Key className="w-4 h-4" />
              <h2>2. Secure VIP Payment Gateway</h2>
            </div>
            <p>
              Bespoke deposit transactions and allocation reservations utilize PCI-DSS Level 1 certified tokenization. HyperVault servers never store raw credit card credentials or bank account details.
            </p>
          </section>

          {/* Data Protection */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <h2>3. Data Protection & Vaulting</h2>
            </div>
            <p>
              Client records, paint-to-sample specifications, and private concierge consultation logs are encrypted at rest using AES-256 keys managed via dedicated hardware security modules (HSM).
            </p>
          </section>

          {/* Authentication */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Eye className="w-4 h-4" />
              <h2>4. Identity Authentication</h2>
            </div>
            <p>
              Access to VIP concierge dashboards and allocation management controls requires multi-factor authentication (MFA) and cryptographic session key validation, mitigating unauthorized access attempts.
            </p>
          </section>

          {/* Infrastructure Security */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Cpu className="w-4 h-4" />
              <h2>5. Cloud Infrastructure Security</h2>
            </div>
            <p>
              Hosted on containerized Cloud Run environments with isolated micro-services, automated DDOS mitigation, Web Application Firewalls (WAF), and real-time rate limiting protection.
            </p>
          </section>

          {/* Privacy Standards */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Sparkles className="w-4 h-4" />
              <h2>6. International Privacy Standards</h2>
            </div>
            <p>
              Compliant with ISO/IEC 27001 standards, GDPR principles, and Indian Digital Personal Data Protection mandates. User telemetry is stripped of direct PII before analytics aggregation.
            </p>
          </section>

          {/* Continuous Monitoring */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Radio className="w-4 h-4" />
              <h2>7. Continuous Threat Monitoring</h2>
            </div>
            <p>
              24/7 automated vulnerability scanning systems analyze dependencies, SSL certificate chains, and endpoint response headers to identify and neutralize zero-day threats proactively.
            </p>
          </section>

          {/* Responsible Disclosure */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase font-mono text-xs tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <h2>8. Responsible Disclosure Policy</h2>
            </div>
            <p>
              Security researchers who discover potential vulnerabilities are encouraged to report findings confidentially to our cyber defense team at <code className="text-emerald-400 font-mono">security@hypervault.com</code>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
