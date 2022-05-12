import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

/* 
  Make sure to uncomment 'colors' in theme export (line 35)
  when finished setting up custom color palettes
*/
const colors = {
  brand: {
    50: "#",
    100: "#",
    200: "#",
    300: "#",
    400: "#",
    500: "#",
    600: "#",
    700: "#",
    800: "#",
    900: "#"
  }
};

const fonts = {
  body: "Open Sans, system-ui, sans-serif",
  heading: "Open Sans, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const theme = extendTheme({ 
  config, 
  /*colors,*/ 
  fonts, 
});

export default theme;