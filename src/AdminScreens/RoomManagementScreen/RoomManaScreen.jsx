import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Tables from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, FormLabel, TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RoomManaScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/rooms")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  const [roomdetail,setRoomdetail] = useState({
    id: "",
    roomNumber: "",
    roomType: "",
    roomStatu:"",

  })
  // const backHome = () =>{
  //   navigate('/')
  // }
  const createroom = () =>{
    console.log(roomdetail)
    axios.post('http://localhost:3000/rooms',roomdetail)
    .then((res)=>{
      console.log(res,"room add")
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 
  // const adduser = () => {
  //   navigate("/create");
  // };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl sx={{ display: "flex" }}>
              <FormLabel>Id</FormLabel>
              <TextField label="Id"  onChange={(e)=>{
                setRoomdetail({...roomdetail,id:e.target.value})
              }}/>
            </FormControl>
            <FormControl sx={{ display: "flex" }}>
              <FormLabel>Room Name</FormLabel>
              <TextField label="Room number"  onChange={(e)=>{
                setRoomdetail({...roomdetail,roomNumber:e.target.value})
              }}/>
            </FormControl>
            <FormControl sx={{ display: "flex" }}>
              <FormLabel>Room Type</FormLabel>
              <TextField label="Room Type" onChange={(e)=>{
                setRoomdetail({...roomdetail,roomType:e.target.value})
              }} />
            </FormControl>
            <FormControl sx={{ display: "flex" }}>
              <FormLabel>Room Status</FormLabel>
              <TextField label="Status" onChange={(e)=>{
                setRoomdetail({...roomdetail,roomStatus:e.target.value})
              }}/>
            </FormControl>
            <Button onClick={createroom}>Add Room</Button>
          </Box>
        </Modal>
      </div>
      <div>
        <Typography variant="h4" sx={{ margin: "0", padding: "0" }}>
          Rooms
        </Typography>

        <Button
          onClick={handleOpen}
          startIcon={<AddRoundedIcon />}
          sx={{ marginLeft: "80%", marginBottom: 3 }}
          variant="contained"
        >
          Create
        </Button>
      </div>

      {data && <Tables roomData={data} />}
    </div>
  );
};

export default RoomManaScreen;
