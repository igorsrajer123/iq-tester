import { Link } from "react-router-dom";

import { styled } from "@mui/material";
import { Black, Ocean, Orange } from "src/styles/ColorPalette";
import { lightTheme } from "src/styles/Themes";

export const NakedLink = styled(Link)({
  textDecoration: "none",
  fontFamily: lightTheme.typography.fontFamily,
  color: Black.Regular,
});

export const OceanLink = styled(Link)({
  textDecoration: "none",
  fontFamily: lightTheme.typography.fontFamily,
  color: Ocean.Regular,
});

export const StartTestLink = styled(Link)({
  textDecoration: "none",
  fontFamily: lightTheme.typography.fontFamily,
  fontWeight: 500,
  backgroundColor: Orange.Regular,
  width: 256,
  height: 60,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50,
  marginBottom: 50,
  color: Black.Dark,
  transition: "0.3s ease-in-out",
  "&:hover": {
    color: "white",
    background: Orange.Dark,
  },
});
