import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

const initialExercise = {
    exercise: "",
    sets: "",
    reps: "",
    time: "",

}

const ExerciseForm = ({handleAddExercise, date}) => {
    const [open,setOpen] = useState(false);
    const [exercise,setExercise] = useState(initialExercise);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSave = () => {
        handleAddExercise({...exercise,date});
        handleClose();
    }

    const handleChange = (event) => {
        const key = event.target.id;
        const value = event.target.value;
        setExercise({
            ...exercise,
            [key]: value
        })
    }

    const handleClose = () => {
        setExercise(initialExercise);
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} aria-label="delete">
                <AddCircleIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter new Exercise
                    </DialogContentText>
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="exercise"
                        label="Exercise"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={exercise.exercise}
                        onChange={handleChange}
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="sets"
                        label="Sets"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={exercise.sets}
                        onChange={handleChange}
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="reps"
                        label="Reps per set"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={exercise.reps}
                        onChange={handleChange}
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="time"
                        label="Time"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={exercise.time}
                        onChange={handleChange}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ExerciseForm;