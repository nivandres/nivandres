import { setRequestLocale } from "intl-t/next";
import { Hero } from "./hero";
import { Featured } from "./featured";
import { Contact } from "./contact";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <Hero />
      <Featured />
      <Contact />
    </main>
  );
}
