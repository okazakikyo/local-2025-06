import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function AdminBlogFormPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('admin');
  const isEditing = Boolean(id);

  return (
    <div>
      <h2>
        {isEditing
          ? t('blogs.edit_title', { ns: 'admin', blogId: id })
          : t('blogs.create_title', { ns: 'admin' })}
      </h2>
      <Link to="/admin/blogs">{t('common.back_to_list', { ns: 'admin' })}</Link>
       {/* Add form logic here */}
    </div>
  );
}