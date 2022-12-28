import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ChangeLanguage() {
  const { t, i18n } = useTranslation('common');

  return (
    <div>
      <Button onClick={() => i18n.changeLanguage('en')}>{t('language.english')}</Button>
      <Button onClick={() => i18n.changeLanguage('pt')}>{t('language.portuguese')}</Button>
    </div>
  );
}
