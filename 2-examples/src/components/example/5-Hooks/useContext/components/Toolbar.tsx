import React from "react";
import ThemeButton from "./ThemeButton";
import { useThemeContext } from "../index";

function Toolbar() {
  const { setThemeLight, setThemeDark } = useThemeContext();
  return (
    <div>
      <button
        onClick={() => {
          setThemeLight && setThemeLight();
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setThemeDark && setThemeDark();
        }}
      >
        Dark
      </button>
      <ThemeButton />
    </div>
  );
}

export default Toolbar;
