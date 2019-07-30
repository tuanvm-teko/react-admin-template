import vi from './vi';
import en from './en';
import requestLocalizations from './requestLocalizations';

const languages = {
  vi: { translations: vi.translations },
  en: { translations: en.translations },
};

const regions = {
  vi: {
    name: vi.name,
    icon: vi.icon,
  },
  en: {
    name: en.name,
    icon: en.icon,
  },
};

export { languages, regions, requestLocalizations };
