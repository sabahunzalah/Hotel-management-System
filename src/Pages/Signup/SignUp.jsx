import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Store/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import GoogleIcon from "@mui/icons-material/Google";
import img1 from "../../assets/hotelsignup2.png";

import {
  Button,
  TextField,
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Divider,
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";

const SignUp = () => {
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(userdata))
      .unwrap()
      .then(() => navigate("/signin"))
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
        <Box  sx={{ display:{lg:"block",md:"block",sm:"none",xs:"none"},}}>
          <img src={img1} style={{ width: "100%" }} />
        </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box
          sx={{
            // width: "50%",
            maxWidth: 400,
            margin: "auto",
            mt: 5,
            // border: "2px solid black",
            padding: "30px",
            borderRadius: "20px",
            backgroundColor: "white",
            opacity: 0.9,
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
          }}
        >
          <Typography variant="h4">Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="dense">
              <FormLabel>User Name</FormLabel>
              <TextField
                fullWidth
                value={userdata.username}
                onChange={(e) =>
                  setUserdata({ ...userdata, username: e.target.value })
                }
                required
              />
            </FormControl>
            <FormControl fullWidth margin="dense">
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
            <FormControl fullWidth margin="dense">
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

            {/* Role Dropdown */}
            <FormControl fullWidth margin="dense">
              <FormLabel>Role</FormLabel>
              <Select
                value={userdata.role}
                onChange={(e) =>
                  setUserdata({ ...userdata, role: e.target.value })
                }
                required
              >
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>

            {error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ marginTop: "5px" }}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
          {/* <Divider>or</Divider> */}

          {/* Google Sign-In Button */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* <Button fullWidth variant="contained" startIcon={<GoogleIcon />}>
            Sign in with Google{" "}
          </Button> */}
            <Typography sx={{ mt: 2 }}>
              Already have an account? <Link to={"/signin"}>Sign in</Link>
            </Typography>
          </Box>
        </Box>
        </Grid>
      </Container>
      </Grid>
    </>
  );
};

export default SignUp;
