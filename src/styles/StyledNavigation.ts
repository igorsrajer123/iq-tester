import { Box, Grid, Select, styled } from "@mui/material";
import { Black } from "src/styles/ColorPalette";

export const NavigationWrapper = styled(Box)({
  borderBottom: `1px solid ${Black.Weak}`,
  height: 75,
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const NavigationGrid = styled(Grid)({
  height: "100%",
  maxWidth: 1344,
  margin: 0,
});

export const NavigationGridItem = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  fontSize: "1rem",
  whiteSpace: "nowrap",
});

export const NavigationSelect = styled(Select)({
  color: Black.Light,
  border: "none",
  outline: "none",
  "&:focus": {
    outline: "none",
  },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
});
