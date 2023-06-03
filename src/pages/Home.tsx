import {
  Avatar,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { Black, Ocean } from "src/styles/ColorPalette";

import DisplayImage from "src/shared/DisplayImage";
import TesterCover from "src/assets/iq-tester-cover.png";
import { StartTestLink } from "src/styles/StyledLink";
import CheckIcon from "src/icons/CheckIcon";

const Home = () => {
  return (
    <Container sx={{ paddingY: 7 }}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            fontWeight={500}
            fontSize={{ xs: 40, lg: 50 }}
            lineHeight={1}
          >
            TEST YOUR <span style={{ color: Ocean.Regular }}>BRAIN</span>
          </Typography>
          <Typography
            fontWeight={300}
            fontSize={{ xs: 25, lg: 35 }}
            lineHeight={1}
          >
            High Range IQ Testing
          </Typography>

          <StartTestLink to={""}>Start IQ Test</StartTestLink>

          <List>
            <ListItem
              disablePadding
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <CheckIcon width={20} height={20} />
              <ListItemText
                primary={
                  <Typography
                    fontSize={{ xs: 15, md: 17 }}
                    color={Black.Light}
                    ml={1}
                  >
                    Instant IQ Test results
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disablePadding>
              <CheckIcon width={20} height={20} />
              <ListItemText
                primary={
                  <Typography
                    fontSize={{ xs: 15, md: 17 }}
                    color={Black.Light}
                    ml={1}
                  >
                    Share & Compare your results with your friends
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disablePadding>
              <CheckIcon width={20} height={20} />

              <ListItemText
                primary={
                  <Typography
                    fontSize={{ xs: 15, md: 17 }}
                    color={Black.Light}
                    ml={1}
                  >
                    Improve your IQ score and collect trophies
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disablePadding>
              <CheckIcon width={20} height={20} />
              <ListItemText
                primary={
                  <Typography
                    fontSize={{ xs: 15, md: 17 }}
                    color={Black.Light}
                    ml={1}
                  >
                    Get your printable certification
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={7}>
          <DisplayImage
            alt="High Range IQ Testing"
            src={TesterCover}
            width={{ xs: "100%", md: 500, lg: 600 }}
            height={{ xs: "100%", md: 500, lg: 600 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
