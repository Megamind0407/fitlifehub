import React from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";

import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
      
      
      <Footer />
    </Box>
  );
};
export default App;
