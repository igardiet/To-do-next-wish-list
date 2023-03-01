import { useState, useEffect } from "react";
import themeStyles from ".././components/ThemeShift.module.css";
import {
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeShift = () => {
  const [hue, setHue] = useLocalStorage("todo.color", "240");

  const dark = window.matchMedia('(prefered-color: dark)').matches
  const [theme, setTheme] = useLocalStorage("todo.theme", dark ? 'dark' : 'light');
  const [color, setColor] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <aside
      className={themeStyles.wrapper}
      style={{
        backgroundColor: color ? "hsl(var(--muted) / .6)" : "transparent",
      }}
    >
      {color ? (
        <>
          <button
            className={`btn ${themeStyles.close}`}
            aria-label="Close change color mode"
            onClick={() => setColor(false)}
          >
            <XMarkIcon />
          </button>
          <input
            type="range"
            className={themeStyles.picker}
            min="0"
            max="360"
            aria-label="Change color palette slider"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <div className={themeStyles.btns}>
          <button
            className="btn"
            aria-label={`Change to ${theme == "light" ? "dark" : "light"} mode`}
            role="shift"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
            {theme == "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="btn"
            aria-label="Change color mode"
            onClick={() => setColor(true)}
          >
            <SwatchIcon />
          </button>
        </div>
      )}
    </aside>
  );
};
export default ThemeShift;
