import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
// const {id} =useParams()
const deleteUser = async (id) => {
  const confirm = window.confirm("Would you like to delete this user..");

  if (confirm) {
    await axios
      .delete(`http://localhost:3000/rooms/${id}`)
      .then((res) => {
        console.log("delete user");
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default function Tables({roomData}) {
    console.log(roomData)
    const navigate = useNavigate()
    
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Id</StyledTableCell>
            <StyledTableCell align="center">Room No</StyledTableCell>
            <StyledTableCell align="center">Room Type</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         {roomData.map((e,i)=>(
              <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {e.id}
              </StyledTableCell>
              <StyledTableCell align="center">{e.roomNumber}</StyledTableCell>
              <StyledTableCell align="center">{e.roomType}</StyledTableCell>
              <StyledTableCell align="center">{e.status}</StyledTableCell>
              {/* <StyledTableCell align="center">{e.pricing}</StyledTableCell> */}
              {/* <StyledTableCell align="center"> */}
              {/* <Button variant='contained' startIcon={<EditIcon />} sx={{marginRight:"5px"}} onClick={()=>{
                navigate(`/update/${e.id}`)
              }}>Edit</Button>
              <Button variant='contained' endIcon={<DeleteIcon/> } sx={{marginRight:"5px"}}  onClick={() => {
                    deleteUser(e.id);
                  }}>Delete</Button> */}
              {/* </StyledTableCell> */}
              
            </StyledTableRow>
            
         ))}
           
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}