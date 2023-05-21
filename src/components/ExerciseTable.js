import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import ExerciseForm from './ExerciseForm';
import './FitnessTracker.css';

const ExerciseTable = ({rows2 = [] , handleAddExercise, date}) => {
    return (
        <TableContainer component= {Paper}>
            <Table aria-label = "simple table">
                <TableHead>
                    <TableRow sx={{}}>
                        <TableCell sx={{fontSize: "1ex" }}>Exercise</TableCell>
                        <TableCell sx={{fontSize: "1ex" }} align="right">Sets</TableCell>
                        <TableCell sx={{fontSize: "1ex" }} align="right">Reps</TableCell>
                        <TableCell sx={{fontSize: "1ex" }} align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map((row2) => (
                        <TableRow
                            key={row2.exercise}
                            sx={{ backgroundColor: '#dcdcdc', '&:last-child td, &:last-child th' : {border: 0}}}
                        >
                            <TableCell sx={{fontSize: ".8ex"}} component="th" scope="row2">
                                {row2.exercise}
                            </TableCell>
                            <TableCell sx={{fontSize: ".8ex" }} align="right">{row2.sets}</TableCell>
                            <TableCell sx={{fontSize: ".8ex" }} align="right">{row2.reps}</TableCell>
                            <TableCell sx={{fontSize: ".8ex" }} align="right">{row2.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Paper sx={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <ExerciseForm handleAddExercise={handleAddExercise} date={date} />
            </Paper>
        </TableContainer>
    );
}

export default ExerciseTable;