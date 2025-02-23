
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  styled,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  FormLabel,
} from "@mui/material";
import image from "../../assets/hotelveiw.jpeg";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { db } from "../../firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    password: "",
    role: "customer", 
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      await addDoc(collection(db, "customers"), formData);
      alert("Customer added successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        roomType: "",
        checkIn: "",
        checkOut: "",
        password: "",
        role: "customer",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <Grid container spacing={4} sx={{ py: 10, display: "flex", alignItems: "center" }}>
      <Grid item xs={12} md={6}>
        <Box borderRadius="10px" overflow="hidden">
          <img
            src={image}
            alt="Contact Us"
            style={{ width: "100%", height: 550, borderRadius: "50%" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Box bgcolor="#FFFFFF" borderRadius="10px" p={4} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)">
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            Get in Touch
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment> }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment> }}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="room-type-label">Room Type</InputLabel>
              <Select
                labelId="room-type-label"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="double">Double</MenuItem>
                <MenuItem value="suite">Suite</MenuItem>
              </Select>
            </FormControl>

            <FormLabel>Check In</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
            />
            <FormLabel>Check Out</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, bgcolor: "#FF9800", color: "white" }}>
              Get in Appointment
            </Button>
          </form>

          <Typography variant="body2" align="center" sx={{ mt: 2, color: "#757575" }}>
            Or Call us: +1 800-555-1234
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
