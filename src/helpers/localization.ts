import { regions } from 'localization';
import { languageConstants, localStorageConstants } from '../constants';

const getCurrentLanguage = () => {
  let language =
    localStorage.getItem(localStorageConstants.KEY_LANGUAGE) ||
    languageConstants.VIETNAM;

  // check if language in localstorage exist in project or not
  if (!regions[language]) language = languageConstants.VIETNAM;

  return language;
};

const changeLanguage = (newLanguage: string) => {
  localStorage.setItem(localStorageConstants.KEY_LANGUAGE, newLanguage);
  window.location.reload();
};

export default {
  getCurrentLanguage,
  changeLanguage,
};
