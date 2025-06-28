// src/components/common/LanguageSelector.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '@/css/LanguageSelector.module.css'; // Import CSS Module

// Mở rộng cấu trúc dữ liệu để chứa cả icon
const LANGUAGE_DATA = {
  en: { label: 'EN', icon: '/flags/en.svg' },
  vi: { label: 'VI', icon: '/flags/vi.svg' },
  fr: { label: 'FR', icon: '/flags/fr.svg' },
};

// Lấy danh sách key từ object trên
const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_DATA) as (keyof typeof LANGUAGE_DATA)[];

interface LanguageSelectorProps {
  onLanguageChange?: (lng: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language as keyof typeof LANGUAGE_DATA;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(prev => !prev);

  const handleLanguageChange = (lng: keyof typeof LANGUAGE_DATA) => {
    if (lng === currentLang) return;
    i18n.changeLanguage(lng);
    onLanguageChange?.(lng);
    setIsOpen(false);
  };

  return (
      <div ref={containerRef} className={styles.container}>
        <button
            className={styles.toggleButton}
            onClick={handleToggle}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
        >
          {/* Icon lá cờ */}
          <img
              src={LANGUAGE_DATA[currentLang]?.icon}
              alt={`${LANGUAGE_DATA[currentLang]?.label} flag`}
              className={styles.flagIcon}
          />
          {/* Tên ngôn ngữ */}
          <span className={styles.languageLabel}>
            {LANGUAGE_DATA[currentLang]?.label}
        </span>
          {/* Mũi tên dropdown */}
          <span className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`} />
        </button>

        {isOpen && (
            <ul className={styles.dropdownList} role="listbox">
              {SUPPORTED_LANGUAGES.map(lng => (
                  <li key={lng} role="none">
                    <button
                        role="option"
                        aria-selected={lng === currentLang}
                        className={styles.dropdownItem}
                        onClick={() => handleLanguageChange(lng)}
                        disabled={lng === currentLang}
                    >
                      <img src={LANGUAGE_DATA[lng].icon} alt={`${LANGUAGE_DATA[lng].label} flag`} className={styles.flagIcon} />
                      <span>{LANGUAGE_DATA[lng].label}</span>
                    </button>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default LanguageSelector;