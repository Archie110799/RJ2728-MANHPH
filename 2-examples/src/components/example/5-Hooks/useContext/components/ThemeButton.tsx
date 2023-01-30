import React from "react";

import { useThemeContext } from "../index";

function ThemeButton() {
  const { theme } = useThemeContext();
  return (
    <button
      style={{
        background: theme?.background,
        color: theme?.foreground,
      }}
    >
      I am styled by theme context!
    </button>
  );
}

export default ThemeButton;
