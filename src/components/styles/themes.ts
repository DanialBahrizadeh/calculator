import Theme from "../../model/Theme";

const screen = {
  mobile: "375px",
  desktop: "1440px",
};

export const darkTheme: Theme = {
  backgroundColor: {
    main: "hsl(224, 36%, 15%)",
    screen: "hsl(222,26%,31%)",
    toggle: "hsl(223, 31%, 20%)",
    keypad: "hsl(223, 31%, 20%)",
  },
  keysColor: {
    background: {
      main: "hsl(30, 25%, 89%)",
      secondary: "hsl(225, 21%, 49%)",
      equals: "hsl(6, 63%, 50%)",
    },
    shadow: {
      main: "hsl(28, 16%, 65%)",
      secondary: "hsl(224, 28%, 35%)",
      equals: "hsl(6, 70%, 34%)",
    },
    activeBackground: {
      main: "hsl(0, 0%, 100%)",
      secondary: "hsl(224, 51%, 76%)",
      equals: "hsl(6, 93%, 67%)",
    },
  },
  textColor: {
    top: "hsl(0, 0%, 100%)",
    results: "hsl(0, 0%, 100%)",
    keys: "hsl(221, 14%, 31%)",
  },
  screen,
};
