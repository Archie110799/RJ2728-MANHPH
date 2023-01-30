import { AnyRecord } from "dns";
import React, { useContext } from "react";
import Toolbar from "./components/Toolbar";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export interface IThemeContext {
  theme?: any;
  setThemeDark?: () => void;
  setThemeLight?: () => void;
}
export const ThemeContext = React.createContext<IThemeContext>({});
export const useThemeContext = () => useContext(ThemeContext);

// useContext chúng ta có thể chia sẻ state tới các component, 
// useReducer thì cho phép chúng ta cập nhật giá trị mới cho state. 
// Nghe khá là giống với flow của Redux

function ReactContextExample() {
  const [theme, setTheme] = React.useState(themes.light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeDark: () => {
          setTheme(themes.dark);
        },
        setThemeLight: () => {
          setTheme(themes.light);
        },
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default ReactContextExample;
