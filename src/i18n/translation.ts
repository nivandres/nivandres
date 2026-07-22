import { allowedLocales } from "./locales";
import { createTranslation } from "intl-t/next";

export const { Translation, getTranslation, useTranslation, t } =
  createTranslation({
    allowedLocales,
    locales: (locale) =>
      import(
        `./locales/${locale}.json`
      ) as unknown as typeof import("./locales/en.json"),
  });
