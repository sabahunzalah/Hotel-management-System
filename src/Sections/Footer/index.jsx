import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  styled,
} from "@mui/material";

import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import facebookIcon from "../../assets/facebok.png";
import instaIcon from "../../assets/instagram.jpeg";
const footerImages = [image1, image2, image3, image4];

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#2d2d2d",
  color: "white",
  padding: theme.spacing(3),
  textAlign: "center",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  margin: theme.spacing(0, 2),
  "&:hover": {
    color: "#FF9800",
  },
}));

const FooterImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto", 
  display: "block",
  margin: "0 auto",
  objectFit: "cover", 
  height: "220px",
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterBox component="footer">
      <Box sx={{ marginBottom: 4 , }}>
        <Grid container spacing={2} justifyContent="center">
          {footerImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FooterImage src={image} alt={`Footer ${index + 1}`} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold",color:'orange'  }}>
            Hotel
          </Typography>
          <Typography variant="body2" paragraph>
            We are dedicated to helping our partners and building ourselves in
            the industry. View updating info about promotion activity.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FooterLink href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={facebookIcon}
                alt="Facebook"
                style={{ width: 50, height: 50, margin: 4, borderRadius: 50 }}
              />
            </FooterLink>
            <FooterLink href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={instaIcon}
                alt="Instagram"
                style={{ width: 50, height: 50, margin: 4, borderRadius: 50 }}
              />
            </FooterLink>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold",color:'orange'  }}>
            Company
          </Typography>
          <FooterLink href="#">Home</FooterLink>
          <br />
          <FooterLink href="#">About</FooterLink>
          <br />
          <FooterLink href="#">Property</FooterLink>
          <br />
          <FooterLink href="#">Services</FooterLink>
          <br />
          <FooterLink href="#">Blog</FooterLink>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold",color:'orange'  }}>
            Help
          </Typography>
          <FooterLink href="#">Customer Support</FooterLink>
          <br />
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <br />
          <FooterLink href="#">Privacy Policy</FooterLink>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color:'orange' }}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            +1 800-555-1234
            <br />
            +1 800-555-5678
            <br />
            100 Orchard St
            <br />
            New York, NY, 10002, USA
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Monday - Friday
            <br />
            09:00 AM - 05:00 PM
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold",color:'orange'  }}>
            Newsletter
          </Typography>
          <Typography variant="body2" paragraph>
            Join our mailing list and stay up to date on all the latest news and
            promotions.
          </Typography>
          <TextField
            label="Enter your email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{ sx: { backgroundColor: "white" } }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF9800", marginTop: 1 }}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </FooterBox>
  );
};

export default Footer;
