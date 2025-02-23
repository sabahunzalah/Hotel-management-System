
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { images } from "../../Constant/constant";

const SecTwo = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" }, 
        flexDirection: "row",
        height: "40vh",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} sx={{ padding: 2, width: "100%", marginX: 2 }}>
        {images.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                height: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                paddingBottom: 1,
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={`Card ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="body1" fontWeight="bold">
                {item.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SecTwo;
