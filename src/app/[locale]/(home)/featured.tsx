import Link from "next/link";
import Feature from "./_components/feature";
import { getTranslation } from "@/i18n/translation";

export const features = [
  {
    feature: "intl-t",
    href: "https://github.com/nivandres/intl-t",
    src: "https://raw.githubusercontent.com/nivandres/intl-t/main/assets/banner.webp",
  },
  {
    feature: "fiverr",
    href: "https://www.fiverr.com/nivandres",
    src: "/images/fiverr_banner.webp",
  },
] as const;

export function Featured() {
  const t = getTranslation("featured");
  return (
    <section className="flex flex-col max-w-3xl gap-6">
      <h2 className="text-lg font-semibold text-muted-foreground">{t.title}</h2>
      {features.map(({ feature, href, src }) => (
        <Link key={feature} href={href} target="_blank">
          <Feature
            src={src}
            title={t[feature].title}
            description={t[feature].description}
          />
        </Link>
      ))}
    </section>
  );
}
