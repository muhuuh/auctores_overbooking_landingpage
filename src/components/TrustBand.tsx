import React from 'react';
import { Award, Shield, Users, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrustChip = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 rounded-full border border-champagne/40 bg-white px-4 py-2 text-navy/80 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-champagne flex-shrink-0">{icon}</div>
    <span className="text-sm font-medium">{children}</span>
  </div>
);

const TrustBand = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center max-w-4xl mx-auto">
      <TrustChip icon={<Shield className="w-4 h-4" />}>{t('trust.euPrivacyFirst')}</TrustChip>
      <TrustChip icon={<Rocket className="w-4 h-4" />}>{t('trust.backedByIncubator')}</TrustChip>
      <TrustChip icon={<Users className="w-4 h-4" />}>{t('trust.pilotHotels')}</TrustChip>
    </div>
  );
};

export default TrustBand;
