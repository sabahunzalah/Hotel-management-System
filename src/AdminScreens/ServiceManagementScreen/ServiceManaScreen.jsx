import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

const ServiceManaScreen = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/services") 
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);


  const getServiceIcon = (serviceName) => {
    switch (serviceName.toLowerCase()) {
      case "room cleaning":
        return <CleaningServicesIcon sx={{ fontSize: 40, color: "#4CAF50" }} />;
      case "laundry":
        return <LocalLaundryServiceIcon sx={{ fontSize: 40, color: "#3F51B5" }} />;
      default:
        return <CleaningServicesIcon sx={{ fontSize: 40, color: "#FF9800" }} />;
    }
  };

  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Service Management
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                p: 2,
                textAlign: "center",
                boxShadow: 4,
                borderRadius: 3,
                backgroundColor: index % 2 === 0 ? "#E3F2FD" : "#FFF3E0",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                {getServiceIcon(service.serviceName)}
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {service.serviceName}
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    p: 1,
                    borderRadius: "8px",
                    display: "inline-block",
                    fontWeight: "bold",
                    color: service.availability === "Daily" ? "green" : "blue",
                    backgroundColor:
                      service.availability === "Daily"
                        ? "rgba(0, 255, 0, 0.1)"
                        : "rgba(0, 0, 255, 0.1)",
                  }}
                >
                  {service.availability}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceManaScreen;
