import React from 'react'
import person3 from "../Image/person3.png";
import '../Style/HireMe.css';

function HireMe() {
  return (
    <>
      <div className='main p-5'>
      <span className='ms-5' style={{fontSize:"35px"}}>Hire me</span><br />
        <span className='ms-5' style={{fontSize:"50px", fontFamily:"cursive", color:"#b7c5d3"}}>For your projects</span><br />
        <div style={{height:"405px", marginLeft:"110px", float:"left", width:"450px"}}><img src={person3} alt="person"  style={{height:"100%", width:"100%"}} /></div>
        <div className='box'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean<br />
        <button>Hire me</button>
        </div>
      </div>
    </>
  )
}

export default HireMe
