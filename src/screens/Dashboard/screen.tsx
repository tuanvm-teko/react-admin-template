import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Screen: React.FC = props => {
  const { t, i18n } = useTranslation();

  return <div>{t('Note')}</div>;
};

export default Screen;
