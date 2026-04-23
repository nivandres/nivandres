import { createTranslation } from "intl-t/next";
import * as en from "./locales/en.json";
import * as es from "./locales/es.json";
import * as ja from "./locales/ja.json";
import * as zh from "./locales/zh.json";
import * as ar from "./locales/ar.json";

export const { Translation, getTranslation, useTranslation, t } =
  createTranslation({
    locales: { en, es, ja, zh, ar },
  });
