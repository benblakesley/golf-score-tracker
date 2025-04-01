import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { firebaseAuth } from "../firebase";

export const AuthForm = () =>
{
    const [error, setError] = useState<string>("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => 
    {
        if (!email || !password)
        {
            setError('Please fill in both fields');
        } 
        else 
        {
            try
            {
                await createUserWithEmailAndPassword(firebaseAuth, email, password);

                setError('');
            }
            catch (error)
            {
                setError('Uh-oh! Something went wrong!');
                console.log(error);
            }
        }
    };

    const handleSignIn = async () => 
    {    
        if (!email || !password)
        {
            setError('Please fill in both fields');
        } 
        else 
        {
            try
            {
                await signInWithEmailAndPassword(firebaseAuth, email, password);
    
                setError('');
            }
            catch (error)
            {
                setError('Invalid credentials');
                console.log(error);
            }
        }
    };

    return (
      <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          p: 3,
          border: '1px solid #a5d6a7', // Light green border
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#f1f8e9', // Light greenish background
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#2e7d32" }}>
          Sign Up / Sign In
        </Typography>

        {error && <Typography color="error" variant="body2">{error}</Typography>}

        <form style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff", // White background
                color: "#2e7d32", // Green text
                "& fieldset": {
                  borderColor: "#66bb6a", // Green border
                },
                "&:hover fieldset": {
                  borderColor: "#43a047", // Darker green on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2e7d32", // Deep green on focus
                },
              },
              "& .MuiInputLabel-root": {
                color: "#388e3c", // Dark green label
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                color: "#2e7d32",
                "& fieldset": {
                  borderColor: "#66bb6a",
                },
                "&:hover fieldset": {
                  borderColor: "#43a047",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2e7d32",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#388e3c",
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#4caf50", color: "#fff", "&:hover": { backgroundColor: "#388e3c" } }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>

          <Button
            fullWidth
            sx={{ mt: 2, color: "#2e7d32" }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
      );
}