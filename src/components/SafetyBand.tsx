import React from 'react';
import { Shield, ArrowUp, Users, FileText, PowerOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SafetyChip = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-xs rounded-full border border-champagne/40 bg-white px-4 py-3 text-navy/80 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-champagne flex-shrink-0">{icon}</div>
    <span className="font-medium">{children}</span>
  </div>
);

const SafetyBand = () => {
  const { t } = useTranslation();
  return (
    <section id="safety" className="py-12 sm:py-16 bg-offWhite">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2">{t('safety.title')}</h2>
          <p className="text-sm text-navy/70">{t('safety.subtitle')}</p>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
          <SafetyChip icon={<Shield className="w-4 h-4" />}>{t('safety.chips.noWalk')}</SafetyChip>
          <SafetyChip icon={<ArrowUp className="w-4 h-4" />}>{t('safety.chips.upgradeFallback')}</SafetyChip>
          <SafetyChip icon={<Users className="w-4 h-4" />}>{t('safety.chips.vipProtection')}</SafetyChip>
          <SafetyChip icon={<FileText className="w-4 h-4" />}>{t('safety.chips.auditLog')}</SafetyChip>
          <SafetyChip icon={<PowerOff className="w-4 h-4" />}>{t('safety.chips.instantOff')}</SafetyChip>
        </div>
      </div>
    </section>
  );
};

export default SafetyBand;


