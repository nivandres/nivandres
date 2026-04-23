"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const isDark = (isMounted && theme) !== "light";

  return (
    <Button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      disabled={!isMounted}
      className="grayscale hover:grayscale-0 duration-400"
      onClick={handleToggleTheme}
      variant="ghost"
      size="icon"
    >
      {isDark ? "🌝" : "🌞"}
    </Button>
  );
}
