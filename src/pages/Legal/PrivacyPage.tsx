import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Server, Mail } from 'lucide-react';
import { BackButton } from '../../components/Navigation/BackButton';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-black text-white min-h-screen relative font-sans">
      <BackButton />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
            <Shield className="w-4 h-4" />
            <span>HyperVault Global Governance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Privacy <span className="text-red-500 font-mono">Policy</span>
          </h1>
          <p className="text-xs font-mono text-zinc-400 mt-3">
            LAST UPDATED: JULY 2026 • OFFICIAL DOCUMENT REF: HV-PRIV-2026-V4
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-300">
          {/* Section 1 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Eye className="w-4 h-4" />
              <h2>1. Information We Collect</h2>
            </div>
            <p>
              At HyperVault, we handle personal and behavioral data with the same uncompromising precision engineered into our hypercars. We collect information through three primary channels:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 pl-2 font-mono">
              <li><strong>Direct Client Submission:</strong> Full name, verified private email, phone contact, location, and custom paint-to-sample configuration requests submitted during consultation or test drive bookings.</li>
              <li><strong>Digital Telemetry:</strong> Session analytics, preferred vehicle specimens viewed, audio synthesis interaction durations, and display viewport metrics.</li>
              <li><strong>VIP Concierge Records:</strong> Allocation inquiry histories, bespoke atelier specifications, and luxury delivery preference notes.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase font-mono text-xs tracking-wider">
              <FileText className="w-4 h-4" />
              <h2>2. How We Use Data</h2>
            </div>
            <p>
              Your data is utilized strictly for luxury client servicing and hypercar allocation management:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 pl-2 font-mono">
              <li>Processing private test drive invitations and VIP showroom pavilion access rights.</li>
              <li>Custom tailoring bespoke vehicle specifications in accordance with manufacturer allocation slots.</li>
              <li>Optimizing real-time 3D WebGL render states and Web Audio API engine acoustic soundscapes for your device.</li>
              <li>Dispatching encrypted quarterly HyperVault journal updates and confidential auction announcements.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Lock className="w-4 h-4" />
              <h2>3. Cookies & Digital Telemetry</h2>
            </div>
            <p>
              HyperVault uses encrypted local browser storage and minimal cookies strictly essential to system performance. We do not engage in third-party ad tracking networks. Our cookies store localized pavilion preferences, audio volume states, and active comparison matrix buffers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Server className="w-4 h-4" />
              <h2>4. Security & Cryptographic Safeguards</h2>
            </div>
            <p>
              All client transmissions undergo TLS 1.3 encryption with 256-bit AES algorithms. Our infrastructure operates on isolated sandboxed cloud instances with automated threat detection and daily integrity audits overseen by our cybersecurity team.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase font-mono text-xs tracking-wider">
              <UserCheck className="w-4 h-4" />
              <h2>5. User Rights & Data Governance</h2>
            </div>
            <p>
              Under international privacy frameworks (including GDPR, CCPA, and Indian Digital Personal Data Protection Act 2023), HyperVault clients hold full rights to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 pl-2 font-mono">
              <li>Request full disclosure of stored personal data records.</li>
              <li>Demand immediate permanent purging of allocation inquiries or contact profiles.</li>
              <li>Opt out of bespoke communications at any moment with single-click verification.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Server className="w-4 h-4" />
              <h2>6. Third-Party Services</h2>
            </div>
            <p>
              HyperVault integrates exclusively with tier-1 enterprise service providers including Google Cloud Platform for CDN media rendering, Unsplash for high-resolution photography, and certified automotive partner APIs. No data is sold or leased to external marketing databases.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Mail className="w-4 h-4" />
              <h2>7. Contact Information</h2>
            </div>
            <p className="text-xs text-zinc-300">
              For privacy requests, data deletion inquiries, or legal communications regarding HyperVault:
            </p>
            <div className="p-4 rounded-xl bg-black border border-white/10 text-xs font-mono space-y-1 text-zinc-400">
              <div><strong>HyperVault Privacy Office:</strong> India Main Headquarters</div>
              <div><strong>Address:</strong> Somewhere in india</div>
              <div><strong>Email:</strong> privacy@hypervault.com / concierge@hypervault.com</div>
              <div><strong>Direct Phone:</strong> +91 77XXXXXXXX</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
