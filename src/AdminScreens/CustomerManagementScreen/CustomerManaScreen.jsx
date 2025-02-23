
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  TextField,
} from "@mui/material";

const CustomerManaScreen = () => {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  // Fetch customers from Firebase
  useEffect(() => {
    const fetchCustomers = async () => {
      const querySnapshot = await getDocs(collection(db, "customers"));
      const customerList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCustomers(customerList);
    };
    fetchCustomers();
  }, []);

  // Delete Customer
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "customers", id));
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Open modal and set current customer data
  const handleEdit = (customer) => {
    setCurrentCustomer(customer);
    setOpen(true);
  };

  // Handle input change
  const handleChange = (e) => {
    setCurrentCustomer({ ...currentCustomer, [e.target.name]: e.target.value });
  };

  // Update Customer
  const handleUpdate = async () => {
    if (currentCustomer) {
      const customerRef = doc(db, "customers", currentCustomer.id);
      await updateDoc(customerRef, {
        fullName: currentCustomer.fullName,
        email: currentCustomer.email,
        phone: currentCustomer.phone,
        roomType: currentCustomer.roomType,
      });
      setCustomers(
        customers.map((customer) =>
          customer.id === currentCustomer.id ? currentCustomer : customer
        )
      );
      setOpen(false);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Name</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Email</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Phone</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Room Type</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell sx={{ textAlign: "center" }}>{customer.fullName}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{customer.email}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{customer.phone}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{customer.roomType}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => handleEdit(customer)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(customer.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Customer Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <TextField
            label="Name"
            name="fullName"
            value={currentCustomer?.fullName || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={currentCustomer?.email || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={currentCustomer?.phone || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Room Type"
            name="roomType"
            value={currentCustomer?.roomType || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ mt: 2, mr: 1 }}>
            Update
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setOpen(false)} sx={{ mt: 2 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default CustomerManaScreen;
