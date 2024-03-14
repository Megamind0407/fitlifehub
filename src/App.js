import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import ExerciseDetail from "./pages/ExerciseDetail";
import CalorieCalculator from "./components/CalorieCalculator";
import AboutUs from "./pages/AboutUs";
import BmiCalculator from "./components/BmiCalculator";
import FitnessTracker from "./components/FitnessTracker";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} />
        <Route path="/CalorieCalculator" element={<CalorieCalculator />} />
        <Route path="/FitnessTracker" element={<FitnessTracker />} />
      </Routes>
    </Box>
  );
};

export default App;
