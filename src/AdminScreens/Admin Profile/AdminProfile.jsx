import { Typography, Card, CardContent, Avatar, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system"; 
import { MdAttachEmail } from 'react-icons/md'; 

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  margin: "0 auto", 
  marginBottom: theme.spacing(2), 
  border: `3px solid ${theme.palette.background.paper}`, 
}));

const AdminProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const role = storedUser?.role;
  const user = useSelector((state) => state.auth.user);

  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto", borderRadius: "10px" }}>
     
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        
        {user?.profilePicture ? ( 
          <StyledAvatar alt={user?.username} src={user?.profilePicture} />
        ) : (
          <StyledAvatar alt={user?.username}>
            {user?.username?.charAt(0)}
          </StyledAvatar> 
        )}
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          {user?.username}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {user?.role}
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "4px" }}
        >
          <MdAttachEmail />
        
          <Typography variant="body2" color="text.secondary">
            {user?.email}
          </Typography>
        </Box>
       
      </CardContent>
    </Card>
  );
};

export default AdminProfile;
