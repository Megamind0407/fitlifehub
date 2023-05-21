import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FoodForm from './FoodForm'; 
import './FitnessTracker.css';

const FoodTable = ({rows = [] , handleAddFood, date}) => {
    return (
        <TableContainer component= {Paper}>
            <Table aria-label = "simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontSize: "1ex" }}>Food</TableCell>
                        <TableCell sx={{fontSize: "1ex" }} align="right">Amount</TableCell>
                        <TableCell sx={{fontSize: "1ex" }} align="right">Calories</TableCell>
                        <TableCell sx={{fontSize: "1ex" }} align="right">Protein</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.food}
                            sx={{ backgroundColor: '#dcdcdc', '&:last-child td, &:last-child th' : {border: 0}}}
                        >
                            <TableCell sx={{fontSize: ".8ex"}} component="th" scope="row">
                                {row.food}
                            </TableCell>
                            <TableCell sx={{fontSize: ".8ex" }} align="right">{row.amount}</TableCell>
                            <TableCell sx={{fontSize: ".8ex" }} align="right">{row.calories}</TableCell>
                            <TableCell sx={{fontSize: ".8ex" }} align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Paper sx={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <FoodForm handleAddFood={handleAddFood} date={date} />
            </Paper>
        </TableContainer>
    );
}

export default FoodTable;