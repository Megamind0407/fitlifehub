import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '40px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '52px', height: '52px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #9691e5',font:'18px rubik,sans-serif' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #9691e5',font:'18px rubik,sans-serif' }}>Exercises</a>
      <Link to="/aboutus" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #9691e5',font:'18px rubik,sans-serif' }}>About Us</Link>
     
      

    </Stack>
    <Button
          className="search-btn"
          sx={{
            bgcolor: "#6674CC",
            color: "#fff",
            textTransform: "none",
            width: { lg: "140px", xs: "80px" },
            height: "45px",
            position: "absolute",
            right: "20px",
            top:"40px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          
        >
          Register
      </Button>
  </Stack>
);

export default Navbar;