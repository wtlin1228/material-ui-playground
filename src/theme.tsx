import { createTheme, extendTheme } from "@mui/material";

export const colors = {
  blueMuncell: {
    50: "#eff3f4",
    100: "#e1e9eb",
    200: "#d4e5e9",
    300: "#cbe3e4",
    400: "#26c6da",
    500: "#00bcd4",
    600: "#00acc1",
    700: "#0099b5",
    800: "#008092",
    900: "#006a78",
    A100: "#84ffff",
    A200: "#00d3fa",
    A400: "#00c7ec",
    A700: "#00a2c0",
  },
  grey: {
    50: "#f8f9fa",
    100: "#f5f5f5",
    200: "#e9ecef",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#b2b5b8",
    600: "#767b81",
    700: "#495057",
    800: "#33383d",
    900: "#1e2123",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  red: {
    50: "#fcebeb",
    100: "#fecdd2",
    200: "#f2b1b1",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#df3c3c",
    700: "#d32f2f",
    800: "#aa1c1c",
    900: "#611010",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  blue: {
    50: "#dbedfb",
    100: "#bbdefb",
    200: "#7fbff1",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1780d1",
    700: "#1264a3",
    800: "#1565c0",
    900: "#11334a",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  green: {
    50: "#e1f5db",
    100: "#c8e6c9",
    200: "#9fdf8b",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#4aa42d",
    700: "#3e8926",
    800: "#2e7d32",
    900: "#204713",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  orange: {
    50: "#fff6e9",
    100: "#ffdeb2",
    200: "#fdd292",
    300: "#ffb74d",
    400: "#fba92e",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#d57800",
    900: "#6f4302",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  amber: {
    50: "#fff8e1",
    100: "#ffecb3",
    200: "#ffe082",
    300: "#ffd54f",
    400: "#ffca28",
    500: "#ffc107",
    600: "#ffb300",
    700: "#ffa000",
    800: "#ff8f00",
    900: "#ff6f00",
    A100: "#ffe57f",
    A200: "#ffd740",
    A400: "#ffc400",
    A700: "#ffab00",
  },
  blueGrey: {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    300: "#90a4ae",
    400: "#7890d6",
    500: "#607d8b",
    600: "#546e7a",
    700: "#455a64",
    800: "#37474f",
    900: "#263238",
    A100: "#cfd8dc",
    A200: "#b0bec5",
    A400: "#7890d6",
    A700: "#455a64",
  },
  cyan: {
    50: "#e0f7fa",
    100: "#b2ebf2",
    200: "#80dee0",
    300: "#4dd0e1",
    400: "#26c6da",
    500: "#00bcd4",
    600: "#00acc1",
    700: "#0097a7",
    800: "#00838f",
    900: "#006064",
    A100: "#84ffff",
    A200: "#00e5ff",
    A400: "#00b8d4",
    A700: "#0097a7",
  },
  deepPurple: {
    50: "#ede7f6",
    100: "#d1c4e9",
    200: "#b39ddb",
    300: "#9575cd",
    400: "#7e57c2",
    500: "#673ab7",
    600: "#5e35b1",
    700: "#512da8",
    800: "#4527a0",
    900: "#311b92",
    A100: "#b39ddb",
    A200: "#9575cd",
    A400: "#7c4dff",
    A700: "#651fff",
  },
  indigo: {
    50: "#e8eaf6",
    100: "#c5cae9",
    200: "#9fa8da",
    300: "#7986cb",
    400: "#5c6bc0",
    500: "#3f51b5",
    600: "#3949ab",
    700: "#303f9f",
    800: "#283593",
    900: "#1a237e",
    A100: "#8c9eff",
    A200: "#536dff",
    A400: "#3d5afe",
    A700: "#304ffe",
  },
  lime: {
    50: "#f9fbe7",
    100: "#f0f4c3",
    200: "#e6ee9c",
    300: "#dce775",
    400: "#d4e157",
    500: "#cddc39",
    600: "#c0ca33",
    700: "#afb42b",
    800: "#9e9d24",
    900: "#827723",
    A100: "#f4ff81",
    A200: "#eeff41",
    A400: "#c6ff00",
    A700: "#aeea00",
  },
  pink: {
    50: "#fce4ec",
    100: "#f8bbd0",
    200: "#f48fb1",
    300: "#f06292",
    400: "#ec407a",
    500: "#e91e63",
    600: "#d81b60",
    700: "#c2185b",
    800: "#ad1457",
    900: "#880e4f",
    A100: "#ff80ab",
    A200: "#ff4081",
    A400: "#f50057",
    A700: "#c51162",
  },
  purple: {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  teal: {
    50: "#e0f2f1",
    100: "#b2dfdb",
    200: "#80cbc4",
    300: "#4db6ac",
    400: "#26a69a",
    500: "#009688",
    600: "#00897b",
    700: "#00796b",
    800: "#00695c",
    900: "#004d40",
    A100: "#a7ffeb",
    A200: "#64ffda",
    A400: "#1de9b6",
    A700: "#00bfa5",
  },
  yellow: {
    50: "#fffde7",
    100: "#fff9c4",
    200: "#fff59d",
    300: "#fff176",
    400: "#ffee58",
    500: "#ffeb3b",
    600: "#fdd835",
    700: "#fbc02d",
    800: "#f9a825",
    900: "#f57f17",
    A100: "#ffff8d",
    A200: "#ffff00",
    A400: "#ffea00",
    A700: "#ffd600",
  },
};

export const palette = {
  primary: {
    main: colors.blueMuncell[700],
    dark: colors.blueMuncell[800],
    darker: colors.blueMuncell[900],
    light: colors.blueMuncell[300],
    lighter: colors.blueMuncell[50],
    contrast: "#ffffff",
  },
  divider: colors.grey[200],
  text: {
    primary: colors.grey[700],
    secondary: colors.grey[600],
    disabled: colors.grey[500],
  },
  info: {
    main: colors.blue[600],
    dark: colors.blue[700],
    darker: colors.blue[900],
    light: colors.blue[200],
    lighter: colors.blue[50],
    contrast: "#ffffff",
  },
  _components: {
    appBar: {
      defaultFill: colors.grey[900],
    },
  },
};

export const theme1 = extendTheme({
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      lineHeight: "46px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    h2: {
      fontSize: "2rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      lineHeight: "40px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    h3: {
      fontSize: "1.5rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      lineHeight: "30px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    h4: {
      fontSize: "1.125rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      lineHeight: "24px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    h5: {
      fontSize: "1rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      lineHeight: "20px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    h6: {
      fontSize: "0.875rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      fontWeight: 700,
      lineHeight: "18px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    subtitle1: {
      fontSize: "1.125rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      lineHeight: "28px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    subtitle2: {
      fontSize: "1rem",
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      lineHeight: "24px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    body1: {
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      lineHeight: "24px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    body2: {
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      lineHeight: "22px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    overline: {
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      lineHeight: "16px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
    caption: {
      fontFamily: "Noto Sans TC, Helvetica, Arial, sans-serif",
      lineHeight: "16px",
      color: palette.text.primary,
      fontFeatureSettings: "'liga' off, 'clig' off",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: palette.primary.main,
        },
        divider: palette.divider,
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          "--AppBar-background": palette._components.appBar.defaultFill,
          "--AppBar-color": palette.primary.contrast,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "var(--mui-shadows-0)",

          "&:hover": {
            boxShadow: "var(--mui-shadows-0)",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .Mui-checked .MuiSwitch-thumb::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
              "#fff"
            )}" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>')`,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            display: "none",
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: colors.blueMuncell[50],
          minWidth: "130px",
          fontSize: "16px",

          // Without a ripple there is no styling for :focus-visible by default.
          // Be sure to highlight the element by applying separate styles with the
          // .Mui-focusVisible class.
          "&.Mui-focusVisible": {
            backgroundColor: colors.blueMuncell[100],
          },

          "&:hover": {
            backgroundColor: colors.blueMuncell[100],
          },

          "&.Mui-selected": {
            backgroundColor: palette.info.darker,
            color: palette.primary.contrast,
            fontWeight: 700,
          },
        },
      },
    },
  },
});

export const theme2 = createTheme({});
