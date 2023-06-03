import { Box, Grid, IconButton, Typography } from "@mui/material";
import DisplayImage from "src/shared/DisplayImage";
import { Black } from "src/styles/ColorPalette";
import Logo from "src/assets/iqhaven.webp";
import FacebookIcon from "src/icons/FacebookIcon";
import InstagramIcon from "src/icons/InstagramIcon";
import TwitterIcon from "src/icons/TwitterIcon";

const Footer = () => {
  return (
    <Box
      width="100%"
      flexDirection="column"
      alignItems="center"
      sx={{
        display: "flex",
        background: "#f8f9fb",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Grid container sx={{ maxWidth: 1344 }}>
        <Grid
          item
          container
          py={4}
          xs={12}
          sx={{ borderBottom: `1px solid ${Black.Weak}` }}
        >
          <DisplayImage
            alt="IQ Tester logo"
            src={Logo}
            width={147}
            height={49}
          />
        </Grid>
        <Grid item container height={"100%"} py={3}>
          <Grid item xs={6}>
            <Typography color={Black.Regular}>
              © 2023 IQ Haven. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end" gap={2}>
            <Box sx={{ cursor: "pointer" }} height={24}>
              <InstagramIcon width={24} height={24} />
            </Box>

            <Box sx={{ cursor: "pointer" }} height={24}>
              <FacebookIcon width={24} height={24} />
            </Box>

            <Box sx={{ cursor: "pointer" }} height={24}>
              <TwitterIcon width={24} height={24} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
