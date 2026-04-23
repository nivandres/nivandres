import "./globals.css";
import { Metadata } from "next";
import { Translation } from "@/i18n/translation";
import { meta } from "@/i18n/locales";
import { setRequestLocale } from "intl-t/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./navbar";
import { ThemeProvider } from "next-themes";

export { generateStaticParams } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "@nivandres",
  description: "Personal website",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!Translation.locales.includes(locale as typeof Translation.locale))
    return;
  setRequestLocale(locale);
  const { lang, dir } = meta[locale as typeof Translation.locale];
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <Translation>
            <TooltipProvider>
              <div className="relative flex flex-col items-center">
                <Navbar />
                <div className="absolute top-0 z-[-2] h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                <div className="absolute inset-0 -z-10 min-h-screen w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]" />
                {children}
                {/* <Footer /> */}
              </div>
            </TooltipProvider>
          </Translation>
        </ThemeProvider>
      </body>
    </html>
  );
}
