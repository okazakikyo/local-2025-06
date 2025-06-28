import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const supportedLanguages = (i18n.options.supportedLngs || []).filter(lang => lang !== 'cimode');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>{t('menu.home')}</Link>
      <Link to="/contact" style={{ marginRight: '10px' }}>{t('menu.contact')}</Link>
      <Link to="/admin/login" style={{ marginRight: '10px' }}>{t('menu.admin_login')}</Link>
       {/* Thêm link admin khác nếu cần, ví dụ sau khi login */}
       {/* <Link to="/admin/users" style={{ marginRight: '10px' }}>{t('menu.admin_users')}</Link> */}
       {/* <Link to="/admin/blogs" style={{ marginRight: '10px' }}>{t('menu.admin_blogs')}</Link> */}
       {/* <Link to="/admin/menus" style={{ marginRight: '10px' }}>{t('menu.admin_menus')}</Link> */}

      <div style={{ marginTop: '10px' }}>
        <span>{t('change_language')}: </span>
        {supportedLanguages.map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: currentLanguage === lng ? 'bold' : 'normal', marginLeft: '5px' }}
            onClick={() => changeLanguage(lng)}
            disabled={currentLanguage === lng}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}