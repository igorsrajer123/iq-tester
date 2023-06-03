import { Hidden, MenuItem } from "@mui/material";

import {
  NavigationWrapper,
  NavigationGrid,
  NavigationGridItem,
  NavigationSelect,
} from "src/styles/StyledNavigation";
import { NakedLink, OceanLink } from "src/styles/StyledLink";

import DisplayImage from "src/shared/DisplayImage";

import Logo from "src/assets/iqhaven.webp";

const NavigationBar = () => {
  return (
    <NavigationWrapper>
      <NavigationGrid container>
        <NavigationGridItem
          item
          xs={9}
          md={7}
          sx={{ justifyContent: "flex-start" }}
        >
          <DisplayImage
            alt="IQ Tester logo"
            src={Logo}
            width={147}
            height={49}
          />
        </NavigationGridItem>

        <Hidden mdDown>
          <NavigationGridItem item md={1.3}>
            <NakedLink to={""}>Standard IQ Test</NakedLink>
          </NavigationGridItem>
        </Hidden>

        <NavigationGridItem item xs={1.5} md={2}>
          <NavigationSelect displayEmpty value="">
            <MenuItem disabled value="">
              + More Tests
            </MenuItem>
            <MenuItem>
              <NakedLink to={""}>Special Test One</NakedLink>
            </MenuItem>
            <MenuItem>
              <NakedLink to={""}>Some Other Special Test</NakedLink>
            </MenuItem>
            <MenuItem>
              <NakedLink to={""}>Third Special Type of Test</NakedLink>
            </MenuItem>
            <MenuItem>
              <NakedLink to={""}>Fourth Speial Test</NakedLink>
            </MenuItem>
          </NavigationSelect>
        </NavigationGridItem>

        <NavigationGridItem
          item
          xs={1.5}
          md={1.7}
          sx={{ justifyContent: "center" }}
        >
          <OceanLink to={""}>Sign In</OceanLink>
        </NavigationGridItem>
      </NavigationGrid>
    </NavigationWrapper>
  );
};

export default NavigationBar;
