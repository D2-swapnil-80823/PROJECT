import React from 'react'
import { Footer } from "../components";

const AboutPage = () => {
    const containerStyle = {
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#b4b4b4',
      borderRadius: '10px',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    };
  
    const headingStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    };
  
    const paragraphStyle = {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#666',
    };
  
  return (
    <>
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Us</h2> 
      <p style={headingStyle}>
      Online <b>Medicaretrack.in</b> It is a Online Pharmacy, ayurvedic store,Health Store - Its a one stop shop that offers effective Medical products, healthcare solutions to all those individuals who are health enthusiasts. 

      </p> <hr></hr>
   
      <p style={headingStyle}>
        <h4><b>Team members</b></h4>
        <h6><b>1. Gopal Haribhau Gadge </b></h6>
        <h6><b>2. Swapnil Ravindra Mahajan </b></h6>
        <h6><b>3. Manoj Kumar Lakhani </b></h6>
        <h6><b>4. Swapnil Sudhakar Hemadre </b></h6>
      
      </p> <hr></hr>

      <h4>So, make a move and Happy Shopping !!!!</h4>
    </div>
   
      <Footer />
    </>
  )
}

export default AboutPage