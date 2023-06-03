import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Avenir Medium, Avenir, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
  },
});
