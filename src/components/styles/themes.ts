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

export const lightTheme: Theme = {
  backgroundColor: {
    main: "hsl(0, 0%, 90%)",
    screen: "hsl(0, 0%, 93%)",
    toggle: "hsl(0, 5%, 81%)",
    keypad: "hsl(0, 5%, 81%)",
  },
  keysColor: {
    background: {
      main: "hsl(45, 7%, 89%)",
      secondary: "hsl(185, 42%, 37%)",
      equals: "hsl(25, 98%, 40%)",
    },
    shadow: {
      main: "hsl(35, 11%, 61%)",
      secondary: "hsl(185, 58%, 25%)",
      equals: "hsl(25, 99%, 27%)",
    },
    activeBackground: {
      main: "hsl(0, 0%, 100%)",
      secondary: "hsl(186, 41%, 58%)",
      equals: "hsl(25, 99%, 63%)",
    },
  },
  textColor: {
    top: "hsl(60, 10%, 19%)",
    results: "hsl(60, 10%, 19%)",
    keys: "hsl(60, 10%, 19%)",
  },
  screen,
};

export const draculaTheme: Theme = {
  backgroundColor: {
    main: "hsl(268, 71%, 12%)",
    screen: "hsl(268, 75%, 9%)",
    toggle: "hsl(268, 71%, 12%)",
    keypad: "hsl(268, 71%, 12%)",
  },
  keysColor: {
    background: {
      main: "hsl(268, 47%, 21%)",
      secondary: "hsl(281, 89%, 26%)",
      equals: "hsl(176, 100%, 44%)",
    },
    shadow: {
      main: "hsl(290, 70%, 36%)",
      secondary: "hsl(285, 91%, 52%)",
      equals: "hsl(177, 92%, 70%)",
    },
    activeBackground: {
      main: "hsl(268, 54%, 42%)",
      secondary: "hsl(280, 57%, 42%)",
      equals: "hsl(178, 77%, 75%)",
    },
  },
  textColor: {
    top: "hsl(52, 100%, 62%)",
    results: "hsl(52, 100%, 62%)",
    keys: "hsl(52, 100%, 62%)",
    equalsKey: "hsl(198, 20%, 13%)",
  },
  screen,
};
