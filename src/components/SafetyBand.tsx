import React from 'react';
import { Shield, ArrowUp, Users, FileText, PowerOff } from 'lucide-react';

const SafetyChip = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-xs rounded-full border border-champagne/40 bg-white px-4 py-3 text-navy/80 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-champagne flex-shrink-0">{icon}</div>
    <span className="font-medium">{children}</span>
  </div>
);

const SafetyBand = () => {
  return (
    <section id="safety" className="py-12 sm:py-16 bg-offWhite">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">Safety by default.</h2>
          <p className="text-sm text-navy/70">Configured once, applied daily; full audit log.</p>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
          <SafetyChip icon={<Shield className="w-4 h-4" />}>No-walk policy (default)</SafetyChip>
          <SafetyChip icon={<ArrowUp className="w-4 h-4" />}>Upgrade fallback</SafetyChip>
          <SafetyChip icon={<Users className="w-4 h-4" />}>VIP/family protection</SafetyChip>
          <SafetyChip icon={<FileText className="w-4 h-4" />}>Full audit log</SafetyChip>
          <SafetyChip icon={<PowerOff className="w-4 h-4" />}>Instant off switch</SafetyChip>
        </div>
      </div>
    </section>
  );
};

export default SafetyBand;


