import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/utils/language";
import { ThemeSwitcher } from "@/components/utils/theme";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { getTranslation } from "@/i18n/translation";
import { Link } from "@/i18n/navigation";

export async function Navbar() {
  const t = await getTranslation("nav");
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
              <div>
                <LanguageSwitcher />
              </div>
            </TooltipTrigger>
            <TooltipContent>{t.lang}</TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <div>
                <ThemeSwitcher />
              </div>
            </TooltipTrigger>
            <TooltipContent>{t.theme}</TooltipContent>
          </Tooltip>
        </div>
      </nav>
    </header>
  );
}
