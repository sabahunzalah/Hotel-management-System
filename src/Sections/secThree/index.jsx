import React from "react";
import { Grid, Box, Typography, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";
import { rooms } from "../../Constant/constant"; // Import rooms data

// Custom styled component for the orange price box
const OrangeBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FF9800",
  color: "white",
  padding: theme.spacing(1),
  textAlign: "center",
}));

const RoomComponent = ({ image, title, description, price }) => {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} key={title} sx={{ marginTop: 5 }}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "black",
          color: "white",
          borderRadius: 0,
          border: "none",
          boxShadow: "none",
          marginBottom: 2, // Margin bottom for each card
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="white" sx={{ marginBottom: 1 }}>
            {description}
          </Typography>
          <OrangeBox>{price}</OrangeBox>
        </Box>
      </Card>
      {/* Text below the card */}
      <Typography variant="body2" color="white" align="center">
        Additional Text for {title} (You can customize this)
      </Typography>
    </Grid>
  );
};


const RoomsGrid = () => {
  return (
    <Box
      sx={{
        marginBottom:5,
        backgroundColor: "black",
        padding: 2, 
        paddingTop: 3, 
        paddingBottom: 3,
        marginTop:5, 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center' 
      }}
    >
      {/* Centered Heading */}
      <Typography
        fontSize="30px"
        align="center"
        color="orange"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        "OUR ROOMS & SUITES"
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {rooms.map((room) => (
          <RoomComponent key={room.title} {...room} />
        ))}
      </Grid>
    </Box>
  );
};

export default RoomsGrid;