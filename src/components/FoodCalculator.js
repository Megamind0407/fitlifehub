import { Container, InputAdornment, TextField, Typography, Grid, Box } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import diet from "../assets/images/diet.png";
import burger from "../assets/images/burger.png";
import ramen from "../assets/images/ramen.png";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  return (
    <Container maxWidth="md" sx={{ mt: 20}}>
      
        <Typography variant="h2" align="center" sx={{}} color="#6674CC">
              Food Calorie Tracker
        </Typography>
        <Box display="flex" justifyContent="center" gap={3} alignItems="center" sx={{mb: 1}}>
            <img src={diet} alt="diet" style={{ width: "40px", height: "40px" }}/>
            <img src={burger} alt="burger" style={{width: "40px", height: "40px" }}/>
            <img src={ramen} alt="ramen" style={{ width: "40px", height: "40px" }}/>
        </Box>
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{mb: 10}}
      
        >
        <Grid item>
            <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: 600 }}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                }}
        />
        
        </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{mb:10}} >
            <ColorButton variant="contained" size="large">Search</ColorButton>
        </Box>
        
     
    </Container>


  );
}