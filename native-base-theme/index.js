import { colors, extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#dbe4ff",
      100: "#bac8ff",
      200: "#91a7ff",
      300: "#748ffc",
      400: "#5c7cfa",
      500: "#5961E0",
      600: "#4a53e2",
      700: "#434cc0",
      800: "#4157c5",
      900: "#3049c5",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});

export default theme;
