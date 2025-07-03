import { createTranslation } from "intl-t/next";

export const { Translation, getTranslation, useTranslation, t } =
  createTranslation({
    locales: {
      en: () => import("./locales/en.json"),
      es: () => import("./locales/es.json"),
    },
  });
