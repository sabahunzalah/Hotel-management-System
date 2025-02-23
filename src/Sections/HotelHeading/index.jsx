
import { Stack, Typography } from "@mui/material";
import React from "react";

const HotelHeading = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100px",
        display: { xs: "none", sm: "flex" }, // Hide on xs, show on sm and above
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          color: "orange",
          fontWeight: 700,
        }}
      >
        HOTEL MASTER ROOMS
      </Typography>
    </Stack>
  );
};

export default HotelHeading;
