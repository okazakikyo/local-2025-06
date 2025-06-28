import { useTranslation } from 'react-i18next';

export default function AdminLoginPage() {
    const { t } = useTranslation('admin'); // Sử dụng namespace 'admin' nếu có
    return <h2>{t('login.title', { ns: 'admin' })}</h2>; // Truyền ns nếu cần
    // Hoặc dùng t('admin:login.title') nếu không set defaultNS cho admin
}