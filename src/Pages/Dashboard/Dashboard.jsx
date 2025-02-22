
import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Collapse,
  Divider,
} from "@mui/material";
import { Menu, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Store/Slices/authSlice";
import { AdminPanel,CustomerPanel } from "./Data";
import Rooms from "../../CustomersScreens/Rooms/Rooms";
import ServicesProvided from "../../CustomersScreens/Services/ServicesProvided";
import BookingMethod from "../../CustomersScreens/BookingMethod/BookingMethod";
import ProfileMethod from "../../CustomersScreens/Profile/ProfileMethod";
import CustomerManaScreen from "../../AdminScreens/CustomerManagementScreen/CustomerManaScreen";
import RoomManaScreen from "../../AdminScreens/RoomManagementScreen/RoomManaScreen";
import BookingManaScreen from "../../AdminScreens/BookingManagementScreen/BookingManaScreen";
import PaymentManaScreen from "../../AdminScreens/PaymentManagementScreen/PaymentManaScreen";
import ServiceManaScreen from "../../AdminScreens/ServiceManagementScreen/ServiceManaScreen";
import InventoryManaScreen from "../../AdminScreens/InventoryManagementScreen/InventoryManaScreen";
import AdminProfile from "../../AdminScreens/Admin Profile/AdminProfile";
import PaymentMethod from "../../CustomersScreens/PaymentMethod/PaymentMethod";

const drawerWidth = 240;

export default function Dashboard() {
  const [openSections, setOpenSections] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const role = storedUser?.role;

  // Get user data from Redux
  const user = useSelector((state) => state.auth.user);

  // Handle drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Toggle function for nested items
  const handleToggle = (segment) => {
    setOpenSections((prev) => ({
      ...prev,
      [segment]: !prev[segment],
    }));
  };

  // Logout function
  const logOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        height: "100vh",
        paddingTop: "30px",
        paddingBottom: "50px",
        color: "#046ea0",
      }}
    >
      <Toolbar />
      {role === "admin" ? (
        <List>
          {AdminPanel.map((obj, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/dashboard/${obj.route}`)}
                >
                  {/* <ListItemIcon sx={{ color: "#046ea0" }}>
                    {obj.icon}
                  </ListItemIcon> */}
                  
                  <ListItemText primary={obj.title} />
                  {obj.children ? (
                    openSections[obj.segment] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      ) : (
        <List>
          {CustomerPanel.map((obj, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/dashboard/${obj.route}`)}
                >
                  <ListItemIcon sx={{ color: "#046ea0" }}>
                    {obj.icon}
                  </ListItemIcon>
                  <ListItemText primary={obj.title} />
                  {obj.children ? (
                    openSections[obj.segment] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      )}
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(to left, #03bdb3, #046ea0)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>

          {/* Display logged-in user's name */}
          <Typography variant="h6" noWrap>
            {user && `Welcome ${user.username}`}
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              fontWeight: "600",
              boxShadow: "0px 0px 4px 0px white",
            }}
            onClick={logOut}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Permanent Drawer for Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, height: "100vh" }}>
        <Toolbar />
        {role === "admin" ? (
        <Routes>
          <Route path="CustomerManagementScreen" element={<CustomerManaScreen />} />
          <Route path="RoomManagementScreen" element={<RoomManaScreen />} />
          <Route path="BookingManagementScreen" element={<BookingManaScreen />} />
          <Route path="PaymentManagementScreen" element={<PaymentManaScreen />} />
          <Route path="ServiceManagementScreen" element={<ServiceManaScreen />} />
          <Route path="InventoryManagementScreen" element={<InventoryManaScreen />} />
          <Route path="profile" element={<AdminProfile />} />
        </Routes>
        ):(
          <Routes>
          <Route path="rooms" element={<Rooms />} />
          <Route path="services" element={<ServicesProvided />} />
          <Route path="bookingMethod" element={<BookingMethod />} />
          <Route path="paymentMethod" element={<PaymentMethod/>} />
          <Route path="userprofile" element={<ProfileMethod/>} />
        
        </Routes>
        )}
      </Box>
    </Box>
  );
}
