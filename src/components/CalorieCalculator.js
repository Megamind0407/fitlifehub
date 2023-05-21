
import { Box } from '@mui/material';
// import './App.css';
import FoodCalculator from './FoodCalculator';
import ExerciseCalculator from './ExerciseCalculator'

function CalorieCalculator() {
  return (
    <Box display="flex" justifyContent="space-evenly">
        <FoodCalculator/>
        <ExerciseCalculator/>
    </Box>
  );
}

export default CalorieCalculator;
