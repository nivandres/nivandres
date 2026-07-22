import { createNavigation } from "intl-t/navigation";
import { allowedLocales } from "./locales";

export const { proxy, generateStaticParams, redirect, Link } = createNavigation(
  { allowedLocales },
);
