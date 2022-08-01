export default interface Theme {
  backgroundColor: {
    main: string;
    screen: string;
    toggle: string;
    keypad: string;
  };
  keysColor: {
    background: {
      main: string;
      secondary: string;
      equals: string;
    };
    shadow: {
      main: string;
      secondary: string;
      equals: string;
    };
  };
  textColor: {
    top: string;
    results: string;
    buttons: {
      main: string;
      secondary: string;
      equals: string;
    };
  };

  font: {
    size: string;
    family: string;
    weight: string;
  };
}

export interface ThemeProp {
  theme: Theme;
}
