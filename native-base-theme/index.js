import { colors, extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#838aef",
      100: "#5961E0",
      200: "#5b4fce",
      300: "#5b4ec0",
      400: "#454cb5",
      500: "#4249b6",
      600: "#3038ad",
      700: "#293199",
      800: "#171f89",
      900: "#070d89",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});

export default theme;
