import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../../utils/api/auth";
import { useAuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserAuthInfo } = useAuthContext()

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Dummy Authentication (Replace with API call)
    if (email && password) {
      try {
        const data = await AuthAPI.login({email,password});
        console.log("🚀 ~ handleSubmit ~ data:", data)
        if(data) {
          setUserAuthInfo(data)
          toast.success("Login successfully");
          navigate("/"); // Redirect to dashboard
        }
      } catch (error) {
        console.log("🚀 ~ handleSubmit ~ error:", error)
        toast.error(error?.response?.data?.error?.msg || "Some thing went to wrong"); 
      }
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 10, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
