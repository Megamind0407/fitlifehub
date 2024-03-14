import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./Nav";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [isSignIn, setIsSignIn] = React.useState(true);

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Nav/>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            justifyContent: "center",
            marginTop: "15rem",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "240px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignIn ? "Login" : "Register"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            {!isSignIn ? (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
            ) : (
              <></>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <p className="mt-3">
              {isSignIn ? "New Here?" : "Already Registered?"}{" "}
              <span
                className="hover:underline cursor-pointer"
                onClick={handleSignUp}
              >
                {isSignIn ? "Sign Up Now" : "Sign In Now"}
              </span>
            </p>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#6674CC", color: "#fff" }}
            >
              {isSignIn ? "LogIn" : "Register"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
