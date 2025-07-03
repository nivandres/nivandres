"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeSwitcher() {
  const { resolvedTheme: theme, setTheme } = useTheme();
  function handleToggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }
  return (
    <Button
      className="grayscale hover:grayscale-0 duration-400"
      onClick={handleToggleTheme}
      variant="ghost"
      size="icon"
      suppressHydrationWarning
    >
      {theme === "dark" ? "🌝" : "🌞"}
    </Button>
  );
}
