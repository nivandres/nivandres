import { allowedLocales } from "@/i18n/locales";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { getTranslation } from "@/i18n/translation";
import { meta } from "@/i18n/locales";
import { Link } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const t = getTranslation("language");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="grayscale hover:grayscale-0 duration-400"
          variant="ghost"
          size="icon"
        >
          🌐
        </Button>
      </SheetTrigger>
      <SheetContent className="p-6">
        <SheetTitle>{t.title}</SheetTitle>
        <SheetDescription>{t.select}</SheetDescription>
        {allowedLocales.map((locale) => (
          <Link
            key={locale}
            locale={locale}
            className="p-4 w-full bg-accent/30 backdrop-blur-xs rounded-sm"
            title={t.change({ locale }).raw}
          >
            {meta[locale].lang}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}
