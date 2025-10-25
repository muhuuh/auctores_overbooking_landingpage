import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Lang = 'en' | 'de' | 'fr';

const languages: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'de', label: 'DE' },
  { value: 'fr', label: 'FR' },
];

const LanguageSwitcher = ({ compact = false }: { compact?: boolean }) => {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || 'en') as Lang;

  const handleChange = (lng: string) => {
    const lang = (lng as Lang) || 'en';
    i18n.changeLanguage(lang);
  };

  if (compact) {
    return (
      <select
        aria-label="Language"
        value={current}
        onChange={(e) => handleChange(e.target.value)}
        className="text-xs bg-transparent text-inherit border border-champagne/30 rounded px-2 py-1"
      >
        {languages.map((l) => (
          <option key={l.value} value={l.value} className="text-navy">
            {l.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <Select value={current} onValueChange={handleChange}>
      <SelectTrigger className="w-[84px] h-9 bg-transparent text-current border-champagne/30">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((l) => (
          <SelectItem key={l.value} value={l.value}>
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;


