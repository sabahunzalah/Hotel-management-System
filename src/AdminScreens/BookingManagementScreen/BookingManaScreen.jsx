
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  Modal,
  TextField,
} from "@mui/material";

const BookingManaScreen = () => {
  const [bookings, setBookings] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({
    customerName: "",
    roomNumber: "",
    bookingDate: "",
    status: "Pending",
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios
      .get("http://localhost:3000/bookings")
      .then((response) => setBookings(response.data))
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  const handleCreate = () => {
    axios.post("http://localhost:3000/bookings", formData).then(() => {
      fetchBookings();
      setOpen(false);
    });
  };

  const handleEdit = () => {
    axios.put(`http://localhost:3000/bookings/${editData.id}`, formData).then(() => {
      fetchBookings();
      setOpen(false);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/bookings/${id}`).then(() => fetchBookings());
  };

  const handleOpen = (booking = null) => {
    setEditData(booking);
    setFormData(
      booking || { customerName: "", roomNumber: "", bookingDate: "", status: "Pending" }
    );
    setOpen(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Create Booking</Button>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {bookings.map((booking) => (
          <Grid item xs={12} sm={6} md={4} key={booking.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6">{booking.customerName}</Typography>
                <Typography color="textSecondary">Room: {booking.roomNumber}</Typography>
                <Typography color="textSecondary">Date: {booking.bookingDate}</Typography>
                <Typography
                  sx={{
                    mt: 1,
                    p: 1,
                    borderRadius: "8px",
                    display: "inline-block",
                    color: booking.status === "Confirmed" ? "green" : "red",
                    backgroundColor: booking.status === "Confirmed" ? "rgba(0, 255, 0, 0.1)" : "rgba(255, 0, 0, 0.1)",
                  }}
                >
                  {booking.status}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" sx={{ mr: 1 }} onClick={() => handleOpen(booking)}>Edit</Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(booking.id)}>Delete</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 3, backgroundColor: "white", borderRadius: 2, width: 300, margin: "auto", mt: 10 }}>
          <Typography variant="h6" gutterBottom>{editData ? "Edit Booking" : "Create Booking"}</Typography>
          <TextField fullWidth label="Customer Name" margin="dense" value={formData.customerName} onChange={(e) => setFormData({ ...formData, customerName: e.target.value })} />
          <TextField fullWidth label="Room Number" margin="dense" value={formData.roomNumber} onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })} />
          <TextField fullWidth label="Booking Date" type="date" margin="dense" value={formData.bookingDate} onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })} InputLabelProps={{ shrink: true }} />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={editData ? handleEdit : handleCreate}>{editData ? "Update" : "Create"}</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default BookingManaScreen;
