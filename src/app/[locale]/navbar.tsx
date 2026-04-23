import { Button } from "@/components/ui/button";
import { LocaleSelector } from "@/components/utils/language";
import { ThemeToggle } from "@/components/utils/theme";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { getTranslation } from "@/i18n/translation";
import { Link } from "@/i18n/navigation";

export function Navbar() {
  const t = getTranslation("nav");
  return (
    <header className="z-50 sticky top-0 w-full">
      <nav className="h-16 shadow-xs backdrop-blur-[1px] flex items-center justify-between px-4">
        <div className="flex items-center gap-1">
          <Tooltip delayDuration={500}>
            <Link href="/">
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="grayscale hover:grayscale-0 duration-400"
                >
                  🏠
                </Button>
              </TooltipTrigger>
            </Link>
            <TooltipContent>{t.home}</TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <LocaleSelector />
            </TooltipTrigger>
            <TooltipContent>{t.lang}</TooltipContent>
          </Tooltip>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
