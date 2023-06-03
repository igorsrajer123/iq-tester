import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Black, Ocean } from "src/styles/ColorPalette";

export const NakedLink = styled(Link)({
  textDecoration: "none",
  color: Black.Regular,
});

export const OceanLink = styled(Link)({
  textDecoration: "none",
  color: Ocean.Regular,
});
