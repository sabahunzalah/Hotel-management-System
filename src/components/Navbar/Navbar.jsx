
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "white",
          width: "95%",
          top: "20px",
          right: "20px",
          boxShadow: "none",
          paddingY: "10px",
          borderRadius: "20px",
          opacity: 0.6,
        }}
      >
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon sx={{ color: "orange" }} />
            </IconButton>
          </Box>

          {/* Logo */}
          <Typography
            sx={{
              fontSize: "24px",
              color: "orange",
              fontWeight: "bold",
              flexGrow: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Hotel For You
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "50%",
            }}
          >
            <Button
              sx={{ color: "orange", fontSize: "16px", fontWeight: "bold" }}
              onClick={() => navigate("/signup")}
            >
              SignUp
            </Button>
            <Button
              sx={{ color: "orange", fontSize: "16px", fontWeight: "bold" }}
              onClick={() => navigate("/signin")}
            >
              Login
            </Button>
          </Box>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "white", height: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/signup")}>
                <ListItemText primary="SignUp" sx={{ textAlign: "center", color: "orange" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/signin")}>
                <ListItemText primary="Login" sx={{ textAlign: "center", color: "orange" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
