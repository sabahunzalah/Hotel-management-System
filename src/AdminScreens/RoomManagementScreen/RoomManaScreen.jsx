
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tables from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, FormLabel, Grid, IconButton, TextField } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

const RoomManaScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [roomDetail, setRoomDetail] = useState({
    id: "",
    roomNumber: "",
    roomType: "",
    roomStatus: "",
  });
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editRoomId, setEditRoomId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rooms")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const createRoom = () => {
    axios
      .post("http://localhost:3000/rooms", roomDetail)
      .then((res) => {
        setData([...data, res.data]); 
        setOpenAddModal(false); 
      })
      .catch((err) => console.log(err));
  };
  const handleEdit = (room) => {
    setRoomDetail(room);
    setEditRoomId(room.id);
    setOpenEditModal(true);
  };

  const updateRoom = () => {
    axios
      .put(`http://localhost:3000/rooms/${editRoomId}`, roomDetail)
      .then((res) => {
        const updatedRooms = data.map((room) =>
          room.id === editRoomId ? res.data : room
        );
        setData(updatedRooms); 
        setOpenEditModal(false);
      })
      .catch((err) => console.log(err));
  };


  const deleteRoom = (id) => {
    axios
      .delete(`http://localhost:3000/rooms/${id}`)
      .then(() => {
        setData(data.filter((room) => room.id !== id)); 
      })
      .catch((err) => console.log(err));
  };

  const renderModal = (open, handleClose, handleSubmit, title) => (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2} textAlign="right">
            <IconButton onClick={handleClose}>
              <CloseRoundedIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel>Room Number</FormLabel>
              <TextField
                placeholder="Enter Room Number"
                variant="outlined"
                value={roomDetail.roomNumber}
                onChange={(e) =>
                  setRoomDetail({ ...roomDetail, roomNumber: e.target.value })
                }
              />
            </FormControl>
          </Grid>

          
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel>Room Type</FormLabel>
              <TextField
                placeholder="Enter Room Type"
                variant="outlined"
                value={roomDetail.roomType}
                onChange={(e) =>
                  setRoomDetail({ ...roomDetail, roomType: e.target.value })
                }
              />
            </FormControl>
          </Grid>

       
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel>Room Status</FormLabel>
              <TextField
                placeholder="Enter Status (Available/Occupied)"
                variant="outlined"
                value={roomDetail.roomStatus}
                onChange={(e) =>
                  setRoomDetail({ ...roomDetail, roomStatus: e.target.value })
                }
              />
            </FormControl>
          </Grid>

     
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#1976d2",
                color: "white",
                "&:hover": { bgcolor: "#1565c0" },
              }}
              onClick={handleSubmit}
            >
              {title === "Create Room" ? "Add Room" : "Update Room"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );

  return (
    <div>
      {renderModal(openAddModal, () => setOpenAddModal(false), createRoom, "Create Room")}
      {renderModal(openEditModal, () => setOpenEditModal(false), updateRoom, "Edit Room")}

      {/* Header */}
      <Typography variant="h4" sx={{ margin: "0", padding: "0" }}>
        Rooms
      </Typography>
      <Button
        onClick={() => setOpenAddModal(true)}
        startIcon={<AddRoundedIcon />}
        sx={{ marginLeft: "80%", marginBottom: 3 }}
        variant="contained"
      >
        Create
      </Button>

      
      {data && (
        <Tables
          roomData={data}
          onEdit={handleEdit} 
          onDelete={deleteRoom} 
        />
      )}
    </div>
  );
};

export default RoomManaScreen;
