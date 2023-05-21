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

const initialFood = {
    food: "",
    amount: "",
    calories: "",
    protein: "",

}

const FoodForm = ({handleAddFood, date}) => {
    const [open,setOpen] = useState(false);
    const [food,setFood] = useState(initialFood);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSave = () => {
        handleAddFood({...food,date});
        handleClose();
    }

    const handleChange = (event) => {
        const key = event.target.id;
        const value = event.target.value;
        setFood({
            ...food,
            [key]: value
        })
    }

    const handleClose = () => {
        setFood(initialFood);
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} aria-label="delete">
                <AddCircleIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Food</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter new meal and nutritional value
                    </DialogContentText>
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="food"
                        label="Name"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={food.food}
                        onChange={handleChange}
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="amount"
                        label="Amount"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={food.amount}
                        onChange={handleChange}
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="calories"
                        label="Calories"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={food.calories}
                        onChange={handleChange}
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="protein"
                        label="Protein"
                        type="text"
                        fullWidth
                        varient="standard"
                        value={food.protein}
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

export default FoodForm;