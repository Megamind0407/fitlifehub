import React from "react";
import aboutus from "../assets/images/aboutus.jpg";
import { makeStyles } from '@material-ui/core/styles';

 import { Box } from '@mui/material';



const useStyles = makeStyles({
  image: {
    width: '500px', // Set the desired width
    height: '400px', // Set the desired height
    borderRadius: '8px', // Adjust the value as per your preference
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
});

export default function AboutUs() {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="flex-end">
    <img
    className={classes.image}
    src={aboutus}
    alt=""
  />
   
  </Box>
  );
} 

