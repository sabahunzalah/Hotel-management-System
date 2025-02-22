import React from 'react'
import image from '../../assets/Page404-removebg-preview.png'

const PageNotFound = () => {
  return (
    <div style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        width:'100%',
        backgroundImage: "linear-gradient(to bottom, #03bdb3, #046ea0)",
    
    }}>
      <img src={image} width={400}/>
    </div>
  )
}

export default PageNotFound
