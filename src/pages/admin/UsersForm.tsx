import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function AdminUsersFormPage() {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const { t } = useTranslation('admin');
  const isEditing = Boolean(id);

  return (
    <h2>
      {isEditing
        ? t('users.edit_title', { ns: 'admin', userId: id })
        : t('users.create_title', { ns: 'admin' })}
    </h2>
    // Thêm form logic ở đây
  );
}