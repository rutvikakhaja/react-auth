import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import auth from "../../utils/api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [name, setName ] = useState("");
  const navigate  = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(email && password && name) {
      try {
        const data = await auth.signup({name, email, password });
        if(data) {
          toast.success("User signup successfully")
          navigate("/login")
        }

        console.log("🚀 ~ index.jsx:22 ~ handleSubmit ~ data:", data)

      } catch (error) {

        console.log("🚀 ~ index.jsx:23 ~ handleSubmit ~ error:", error)

        toast.error(error?.response?.data?.error?.msg||"Something went to wrong");
      }
    }
  }
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 10, textAlign: "center" }}>
        <Typography> Signup</Typography>
        <Box component={"form"} onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column",gap:2 }}>
            <TextField 
            name="name"
            label="Name"
            fullWidth
            required
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
            fullWidth
          />
          <TextField 
          required
            label="password"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
