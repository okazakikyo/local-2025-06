import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function AdminMenuListPage() {
    const { t } = useTranslation('admin');
    return (
        <div>
            <h2>{t('menus.list_title', { ns: 'admin' })}</h2>
            <Link to="/admin/menus/new">{t('menus.create_new', { ns: 'admin' })}</Link>
            {/* Add list logic here */}
        </div>
    );
}