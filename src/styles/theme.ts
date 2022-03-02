import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#17171B",
      "800": "#192028",
      "500": "#596776",
      "300": "#8B98A7",
      "100": "#F1F6FB",
      "50": "#F4F6F8",
    },
    red: {
      danger: "#D00F3D",
      danger20: "#f6cfd8",
    },
    orange: {
      alert: "#FF9A3E",
    },
    blue: {
      success: "#00C5B9",
      primary: "#00DAE9",
      primaryLight: "#A7ECE9",
      primaryDark: "#0097B8",
      primaryDarkest: "#006A82",
      link: "#306799",
    },
    yellow: {
      secondaryLight: "#FFE142",
      secondary: "#EDB82A",
      secondaryDark: "#CE9400",
    },
  },
  fonts: {
    heading: "Rajdhani",
    body: "Open Sans",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "white",
        color: "white",
      },
      _focus: {
        boxShadow: "none !important",
      },
    },
  },
});
