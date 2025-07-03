import { createNavigation } from "intl-t/navigation";
import { allowedLocales } from "./locales";

export const { middleware, generateStaticParams, redirect, Link } = createNavigation({
  allowedLocales,
});
