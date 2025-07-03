import Link from "next/link";
import Feature from "./_components/feature";
import { getTranslation } from "@/i18n/translation";

export async function Featured() {
  const t = await getTranslation("featured");
  return (
    <section className="flex flex-col max-w-3xl gap-6">
      <h2 className="text-lg font-semibold text-muted-foreground">{t.title}</h2>
      <Link href="https://github.com/nivandres/intl-t" target="_blank">
        <Feature
          src="https://raw.githubusercontent.com/nivandres/intl-t/main/assets/banner.webp"
          title={t["intl-t"].title}
          description={t["intl-t"].description}
        />
      </Link>
      <Link href="https://www.fiverr.com/nivandres" target="_blank">
        <Feature
          src="/images/fiverr_banner.webp"
          title={t["fiverr"].title}
          description={t["fiverr"].description}
        />
      </Link>
    </section>
  );
}
