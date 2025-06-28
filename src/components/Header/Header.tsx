// src/components/Header/Header.tsx
import React from 'react';
import { NavLink } from "react-router";
import styles from '@/css/Header.module.css'; // CSS Modules
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../common/LanguageSelector';

interface NavItem {
    to: string;
    label: string;
    end?: boolean;
}

// Chỉ chứa các link điều hướng chính
const MAIN_NAV_ITEMS: NavItem[] = [
    { to: '/home', label: 'Home', end: true},
    { to: '/about', label: 'About' },
    { to: '/menu', label: 'Menu' },
];

const RESERVATION_ITEM: NavItem = { to: '/reservation', label: 'Reservation' };

const Header: React.FC = () => {
    const { t } = useTranslation();
    return (
        <header className={styles.appHeader}>
            <div className={styles.logoContainer}>
                {/* Giả sử bạn có logo ở đây */}
                 <img className={styles.logoPlaceholder} src='/logo-svg-left.svg' alt="Logo" />
            </div>

            {/* Sử dụng thẻ nav để bao bọc toàn bộ phần điều hướng */}
            <nav className={styles.navigation}>
                {/* Danh sách cho các link chính */}
                <ul className={styles.navList}>
                    {MAIN_NAV_ITEMS.map(item => (
                        <li key={item.to} className={styles.navItem}>
                            <NavLink
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navLink} ${styles.active} `
                                        : styles.navLink + ' ' + isActive
                                }
                            >
                                {t(item.label)}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className={styles.ctaContainer}>
                    <NavLink
                        to={RESERVATION_ITEM.to}
                        className={styles.ctaButton}
                    >
                        {t(RESERVATION_ITEM.label)}
                    </NavLink>
                </div>
            </nav>

            <div className={styles.languageSwitcher}>
                <LanguageSelector/>
            </div>
        </header>
    );
};

export default Header;