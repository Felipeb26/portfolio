import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en/translate.json"
import ptTranslation from "./pt/translate.json";


const i18n = i18next.use(initReactI18next).init({
	lng: "pt",
	fallbackLng: "pt",
	resources: {
		pt: {
			translation: ptTranslation,
		},
		en: {
			translation: enTranslation,
		},
	},
    interpolation: {
        escapeValue: false
    }
});

export default i18n