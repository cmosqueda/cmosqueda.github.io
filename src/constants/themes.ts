// creating theme color interface
interface ThemeColors {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// creating light theme object
const lightTheme: ThemeColors = {
  isDark: false,
  colors: {
    primary: "#efefef",
    secondary: "#1d1d1d",
    accent: "5055ff",
  },
};

// creating dark theme object
const darkTheme: ThemeColors = {
  isDark: true,
  colors: {
    primary: "#272730",
    secondary: "#efefef",
    accent: "#5055ff",
  },
};

// exporting light theme and dark theme
export { lightTheme, darkTheme };

// exporting interface theme colors
export type { ThemeColors };
