// I `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Extend the theme
const theme = extendTheme({ config });

export default theme;
