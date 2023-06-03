import { Grid, Rating, Typography } from "@mui/material";
import React from "react";
import NumberOfTasksIcon from "src/icons/NumberOfTasksIcon";
import { Black, Orange } from "src/styles/ColorPalette";

interface CarouselItemProps {
  name: string;
  rating: number;
  duration: number;
  shares: number;
  timesDone: number;
  iqCap: number;
  numberOfTasks: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  name,
  rating,
  duration,
  shares,
  timesDone,
  iqCap,
  numberOfTasks,
}) => {
  return (
    <Grid
      container
      item
      borderRadius={5}
      sx={{ background: "white", position: "relative" }}
      height={250}
      p={3}
    >
      <Grid
        container
        item
        xs={12}
        sx={{ borderBottom: `1px solid ${Black.Weak}` }}
        height={50}
      >
        <Grid item xs={7}>
          <Typography fontWeight={700}>{name}</Typography>
        </Grid>
        <Grid item xs={5} display="flex" justifyContent="flex-end">
          <Rating value={rating} />
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={6}>
          <NumberOfTasksIcon width={32} height={32} />
          <Typography>{numberOfTasks} IQ-related items</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <Typography>{duration}</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        position="absolute"
        display="flex"
        height="20%"
        alignItems="center"
        justifyContent={"center"}
        sx={{
          background: Orange.Regular,
          bottom: 0,
          left: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Typography fontWeight={700}>Learn More</Typography>
      </Grid>
    </Grid>
  );
};

export default CarouselItem;
