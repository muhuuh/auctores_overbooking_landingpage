import React from 'react';
import { Award, Shield, Users, Rocket } from 'lucide-react';

const TrustChip = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 rounded-full border border-champagne/40 bg-white px-4 py-2 text-navy/80 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-champagne flex-shrink-0">{icon}</div>
    <span className="text-sm font-medium">{children}</span>
  </div>
);

const TrustBand = () => {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center max-w-4xl mx-auto">
      <TrustChip icon={<Award className="w-4 h-4" />}>Built by ex-Amazon team</TrustChip>
      <TrustChip icon={<Shield className="w-4 h-4" />}>EU privacy first</TrustChip>
      <TrustChip icon={<Rocket className="w-4 h-4" />}>Backed by leading incubator</TrustChip>
      <TrustChip icon={<Users className="w-4 h-4" />}>Pilot hotels onboarding</TrustChip>
    </div>
  );
};

export default TrustBand;
