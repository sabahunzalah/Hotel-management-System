import React from 'react'
import ResponsiveAppBar from '../../components/Navbar/Navbar'
import CustomSlider from '../../components/Slider/Slider'
import hotel from '../../assets/hotelimg1.jpeg'
import { Box, Container } from '@mui/material'

const Home = () => {
  return (
    <>
    <ResponsiveAppBar/>

    
    
    <CustomSlider/>
    {/* <Box sx={{width:'100%', height:"500px", opacity:"10"}} >
      
    <img src={hotel} style={{width:"100%", height:"100%"}}/>
    </Box> */}
    
    </>
  )
}

export default Home
