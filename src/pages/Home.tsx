import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Slide,
  Typography,
} from "@mui/material";

import { Black, Ocean, Orange } from "src/styles/ColorPalette";

import DisplayImage from "src/shared/DisplayImage";
import TesterCover from "src/assets/iq-tester-cover.png";
import { StartTestLink } from "src/styles/StyledLink";
import CheckIcon from "src/icons/CheckIcon";
import BlueBackground from "src/assets/blue-bg.png";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "src/shared/CarouselItem";
import { tests } from "src/data";

const chunkArray = (array: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Home = () => {
  const chunks = chunkArray(tests, 4);

  return (
    <Box width="100%" sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        p={1}
        sx={{ paddingY: 7, justifyContent: "center", display: "flex" }}
        width="100%"
      >
        <Grid container maxWidth={1300}>
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
      </Box>

      <Grid
        container
        sx={{
          backgroundImage: `url(${BlueBackground})`,
          backgroundSize: "cover",
        }}
        width={"100%"}
        justifyContent={"center"}
      >
        <Grid
          container
          item
          flexDirection="column"
          justifyContent={"center"}
          sx={{ alignItems: "center" }}
          py={6}
        >
          <Typography
            fontWeight={400}
            fontSize={{ xs: 40, lg: 50 }}
            color="white"
            lineHeight={2}
          >
            Sharpen Your Skills
          </Typography>
          <Typography color="white" fontSize="1rem">
            Take more tests to improve your IQ to be considered a genius
          </Typography>
        </Grid>

        <Grid item width="50%">
          <Carousel
            animation="slide"
            autoPlay
            interval={3000}
            duration={700}
            swipe
            navButtonsAlwaysVisible
            cycleNavigation
            navButtonsWrapperProps={{
              style: {
                height: "67%",
                display: "flex",
                alignItems: "flex-end",
              },
            }}
            navButtonsProps={{
              style: {
                background: "white",
                color: "black",
              },
            }}
            indicatorIconButtonProps={{
              style: {
                color: "white",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: Orange.Regular,
              },
            }}
          >
            {chunks.map((chunk, index) => (
              <Grid container spacing={5} key={index}>
                {chunk.map((test) => (
                  <Grid container item xs={12} md={6} key={test.id}>
                    <CarouselItem
                      name={test.name}
                      duration={test.duration}
                      iqCap={test.iqCap}
                      numberOfTasks={test.numberOfTasks}
                      rating={test.rating}
                      shares={test.shares}
                      timesDone={test.timesDone}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
