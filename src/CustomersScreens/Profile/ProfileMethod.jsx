import { Typography, Card, CardContent, Avatar, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import { MdAttachEmail } from "react-icons/md";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  margin: "0 auto",
  marginBottom: theme.spacing(2),
  border: `3px solid ${theme.palette.background.paper}`,
}));

const UserProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const reduxUser = useSelector((state) => state.auth.user);

  // Use Redux data if available, otherwise fallback to localStorage
  const user = reduxUser || storedUser || {};

  return (
    <Card sx={{ maxWidth: 400, margin: "20px auto", borderRadius: "10px", p: 3 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {user?.profilePicture ? (
          <StyledAvatar alt={user?.username} src={user?.profilePicture} />
        ) : (
          <StyledAvatar alt={user?.username}>{user?.username?.charAt(0)}</StyledAvatar>
        )}
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
          {user?.username || "User"}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "User"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
          <MdAttachEmail style={{ marginRight: "5px" }} />
          <Typography variant="body2" color="text.secondary">
            {user?.email || "No Email Provided"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
