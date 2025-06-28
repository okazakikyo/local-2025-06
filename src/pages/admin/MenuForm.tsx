import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function AdminMenuFormPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('admin');
  const isEditing = Boolean(id);

  return (
    <div>
      <h2>
        {isEditing
          ? t('menus.edit_title', { ns: 'admin', menuId: id })
          : t('menus.create_title', { ns: 'admin' })}
      </h2>
      <Link to="/admin/menus">{t('common.back_to_list', { ns: 'admin' })}</Link>
      {/* Add form logic here */}
    </div>
  );
}