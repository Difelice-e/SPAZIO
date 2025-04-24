/** @type {import('astro-i18next').AstroI18nextConfig} */
import en from "./public/locales/en/translation.json" assert {type: "json"};
import es from "./public/locales/es/translation.json" assert {type: "json"};
import it from "./public/locales/it/translation.json" assert {type: "json"};
import de from "./public/locales/de/translation.json" assert {type: "json"};
import fr from "./public/locales/fr/translation.json" assert {type: "json"};
export default {
    defaultLocale: "en",
    locales: ["en", "fr", "it", "es", "de"],
    baseLanguage: "en",
    i18nextServer: {
        resources: {
            en: {
                translation: {
                    ...en
                }
            },
            es: {
                translation: {
                    ...es
                }
            },
            it: {
                translation: {
                    ...it
                }
            },
            de: {
                translation: {
                    ...de
                }
            },
            fr: {
                translation: {
                    ...fr
                }
            }
        },
    }
};