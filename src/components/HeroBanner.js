import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Typed} from 'react-typed'

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"

  >
    <Typography
      color="#9691e5"
      fontWeight="700"
      fontSize="30px"
      font="rubik,sans-serif"
    >
      FitLife Hub
    </Typography>
    <Typography
      fontWeight={700}
      style={{ color: "#4A4F5C", font: "sans-serif" }}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      <Typed strings={["Train", "Persevere", "Repeat"]} typeSpeed={60} backSpeed={50} loop={true} />

    </Typography>
    <Typography fontSize="22px" font="sans-serif" lineHeight="35px">
      Discover your customized workout plan.
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#6674CC",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
          font: "rubik,sans-serif",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#9691e5"
      sx={{
        opacity: "0",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
}

export default HeroBanner

