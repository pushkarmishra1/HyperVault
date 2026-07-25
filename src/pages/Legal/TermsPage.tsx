import React from 'react';
import { Scale, FileCheck, ShieldAlert, DollarSign, Award, AlertCircle, Gavel, Mail } from 'lucide-react';
import { BackButton } from '../../components/Navigation/BackButton';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-black text-white min-h-screen relative font-sans">
      <BackButton />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            <Scale className="w-4 h-4" />
            <span>HyperVault Legal Framework</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Terms Of <span className="text-amber-400 font-mono">Service</span>
          </h1>
          <p className="text-xs font-mono text-zinc-400 mt-3">
            LAST REVISED: JULY 2026 • OFFICIAL DOCUMENT REF: HV-TOS-2026-V4
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-300">
          {/* Section 1 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <FileCheck className="w-4 h-4" />
              <h2>1. Acceptance of Terms</h2>
            </div>
            <p>
              By entering, navigating, or utilizing any portion of the HyperVault digital pavilion, 3D WebGL showroom suites, or bespoke atelier customizer, you explicitly agree to comply with and be bound by these Terms of Service. If you do not accept these terms in full, you must exit the platform immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <h2>2. Vehicle Information Disclaimer</h2>
            </div>
            <p>
              All vehicle specifications, horsepower ratings, 0-100 km/h acceleration telemetry, top speeds, weight distribution metrics, and production quantity limitations published on HyperVault are verified against manufacturer technical dossiers. However, minor variations may occur based on regional market homologation and specific paint-to-sample finishes.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <DollarSign className="w-4 h-4" />
              <h2>3. Pricing & Specimen Allocation Disclaimer</h2>
            </div>
            <p>
              Prices indicated across HyperVault represent official base MSRP or estimated market valuations in USD, EUR, or INR. Final acquisition costs are subject to custom bespoke tailoring options, local import tariffs, registration fees, and manufacturer allocation slot confirmation. HyperVault reserves the right to adjust displayed pricing without prior notice.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Scale className="w-4 h-4" />
              <h2>4. User Responsibilities</h2>
            </div>
            <p>
              Users agree to provide accurate, truthful personal information when submitting consultation requests or test drive bookings. Any attempt to reverse engineer WebGL shaders, exploit Web Audio API synthesizers, execute automated scraping scripts, or disrupt HyperVault infrastructure will result in immediate IP blacklisting and potential legal action.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Award className="w-4 h-4" />
              <h2>5. Booking & VIP Consultation Policies</h2>
            </div>
            <p>
              Submission of a test drive booking or bespoke atelier inquiry constitutes an expression of interest and does not guarantee vehicle availability or allocation rights. All track test sessions and private showroom viewings are subject to client vetting and formal confirmation by HyperVault VIP Concierge advisors.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Award className="w-4 h-4" />
              <h2>6. Intellectual Property</h2>
            </div>
            <p>
              All trademarks, vehicle iconography, custom 3D model geometries, audio engine sound synthesis code, UI layouts, and brand designations displayed on HyperVault are the intellectual property of HyperVault and its respective manufacturing partners (Ferrari, Lamborghini, Bugatti, Koenigsegg, Porsche, McLaren, Pagani, BMW M, Audi Sport). Unregistered reproduction is strictly prohibited.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <h2>7. Warranty Disclaimer</h2>
            </div>
            <p>
              The HyperVault digital platform is provided on an "as is" and "as available" basis. While we strive for uninterrupted, sub-16ms frame render rates, HyperVault makes no warranties regarding continuous uninterrupted server availability or browser GPU compatibility.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <h2>8. Limitation of Liability</h2>
            </div>
            <p>
              To the maximum extent permitted by applicable law, HyperVault and its founder Pushkar Mishra shall not be liable for any indirect, incidental, or consequential damages resulting from platform usage, allocation delays, or reliance on published specifications.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Gavel className="w-4 h-4" />
              <h2>9. Governing Law</h2>
            </div>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, with primary jurisdiction held in the courts of New Delhi, India.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-400 font-bold uppercase font-mono text-xs tracking-wider">
              <Mail className="w-4 h-4" />
              <h2>10. Contact Information</h2>
            </div>
            <p className="text-xs text-zinc-300">
              For questions concerning these Terms of Service or legal compliance:
            </p>
            <div className="p-4 rounded-xl bg-black border border-white/10 text-xs font-mono space-y-1 text-zinc-400">
              <div><strong>HyperVault Legal Department:</strong> Pushkar Mishra, Founder & Owner</div>
              <div><strong>Main Headquarters:</strong> Somewhere in india</div>
              <div><strong>Legal Email:</strong> legal@hypervault.com</div>
              <div><strong>Hotline:</strong> +91 77XXXXXXXX</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
