import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function AdminBlogListPage() {
    const { t } = useTranslation('admin');
    return (
        <div>
            <h2>{t('blogs.list_title', { ns: 'admin' })}</h2>
            <Link to="/admin/blogs/new">{t('blogs.create_new', { ns: 'admin' })}</Link>
            {/* Add list logic here */}
        </div>
    );
}