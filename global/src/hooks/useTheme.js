import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const salvo = localStorage.getItem("tema");
    if (salvo) return salvo === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const raiz = document.documentElement;
    if (isDark) {
      raiz.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      raiz.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  }, [isDark]);

  const alternarTema = () => setIsDark((prev) => !prev);

  return [isDark, alternarTema];
}
