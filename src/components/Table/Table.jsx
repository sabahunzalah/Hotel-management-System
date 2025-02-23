
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Tables = ({ roomData, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Room Number</TableCell>
            <TableCell>Room Type</TableCell>
            <TableCell>Room Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roomData.map((room) => (
            <TableRow key={room.id}>
              <TableCell>{room.roomNumber}</TableCell>
              <TableCell>{room.roomType}</TableCell>
              <TableCell>{room.roomStatus}</TableCell>
              <TableCell>
                {/* Edit Button */}
                <IconButton onClick={() => onEdit(room)}>
                  <EditIcon color="primary" />
                </IconButton>
                {/* Delete Button */}
                <IconButton onClick={() => onDelete(room.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
