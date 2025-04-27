// src/utils/i18n.ts

export async function loadTranslations(locale: string) {
  const translations = await import(`../locales/${locale}/translation.json`);
  return translations.default;
}

export function createT(translations: Record<string, any>) {
  return (key: string) => {
    return key.split('.').reduce((obj, part) => obj && obj[part], translations) || key;
  };
}

