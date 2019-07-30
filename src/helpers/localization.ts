import { regions, requestLocalizations } from 'localization';
import { languageConstants, localStorageConstants } from '../constants';

const localize = (key: string, lang?: string) => {
  const language = lang || languageConstants.VIETNAM;
  const localization = requestLocalizations[key];
  if (localization && localization[language]) {
    return localization[language];
  }
  return key;
};

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
  localize,
  getCurrentLanguage,
  changeLanguage,
};
