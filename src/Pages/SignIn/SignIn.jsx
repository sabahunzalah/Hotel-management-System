import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import img1 from "../../assets/hotelsignup2.png";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  FormControl,
  FormLabel,
  Divider,
  Grid,
  CssBaseline,
} from "@mui/material";

const SignIn = () => {
  const [userdata, setUserdata] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginUser(userdata))
      .unwrap()
      .then((userData) => {
        
        localStorage.setItem("userData", JSON.stringify(userData));

        const storedUser = JSON.parse(localStorage.getItem("userData"));

        storedUser &&  navigate("/dashboard")
       
       
        console.log(role)
      })
      .catch(() => {});
  };

  return (
    <>
    <CssBaseline />
    <Grid container spacing={2}>
    <Container
      maxWidth
      sx={{
        height: "103vh",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        // border: "2px solid red",
        // background: "linear-gradient(to bottom, #03bdb3, #046ea0)",
      }}
    >
       <Grid item xs={12} sm={12} md={6} lg={6}>
      <Box
        sx={{
     
          maxWidth: 400,
          margin: "auto",
          mt: 5,
          // border: "2px solid black",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "white",
          opacity: 0.9,
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)", 
        }}
      >
        <Typography variant="h4">Sign In</Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <FormLabel>Email</FormLabel>
            <TextField
              fullWidth
              type="email"
              value={userdata.email}
              onChange={(e) =>
                setUserdata({ ...userdata, email: e.target.value })
              }
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormLabel>Password</FormLabel>
            <TextField
              fullWidth
              type="password"
              value={userdata.password}
              onChange={(e) =>
                setUserdata({ ...userdata, password: e.target.value })
              }
              required
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
        <Divider>or</Divider>

        {/* Google Sign-In Button */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button fullWidth variant="contained" startIcon={<GoogleIcon />}>
            Sign in with Google{" "}
          </Button>
          <Typography sx={{ mt: 2 }}>
            Don,t have an account? <Link to={"/signup"}>Sign Up</Link>
          </Typography>
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
      <Box sx={{ display:{lg:"block",md:"block",sm:"none",xs:"none"},}}>
        <img src={img1} style={{ width: "100%" }} />
      </Box>
      </Grid>
    </Container>
    </Grid>
    </>
  );
};

export default SignIn;
