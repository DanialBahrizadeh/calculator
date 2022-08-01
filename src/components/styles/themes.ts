import Theme from "../../model/Theme";

const font = {
  size: "32px",
  family: "'League Spartan', sans-serif;",
  weight: "700",
};

export const darkTheme: Theme = {
  backgroundColor: {
    main: "",
    screen: "",
    toggle: "",
    keypad: "",
  },
  keysColor: {
    background: {
      main: "",
      secondary: "",
      equals: "",
    },
    shadow: {
      main: "",
      secondary: "",
      equals: "",
    },
  },
  textColor: {
    top: "",
    results: "",
    buttons: {
      main: "",
      secondary: "",
      equals: "",
    },
  },

  font,
};
