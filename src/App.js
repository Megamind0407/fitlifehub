import React from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";

import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import CalorieCalculator from "./components/CalorieCalculator";
import AboutUs from "./pages/AboutUs";
import BmiCalculator from "./components/BmiCalculator";
import FitnessTracker from "./components/FitnessTracker";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />

        <Route path="/aboutus" element={<AboutUs />} />
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/BmiCalculator" element={<BmiCalculator/>} />
        <Route path="/CalorieCalculator" element={<CalorieCalculator/>} />
        <Route path="/FitnessTracker" element={<FitnessTracker/>} />
        
      </Routes>
      
      
      <Footer />
    </Box>
  );
};
export default App;
