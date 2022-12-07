import React from 'react'
import '../Style/Project.css'
import person2 from "../Image/person2.png";
import project1 from "../Image/project1.webp";
import project2 from "../Image/project2.webp";
import project3 from "../Image/project3.png";

function project() {

  return (
    <>
     <div id="Project" className='project-main p-5'>
        <span className='ms-5' style={{fontSize:"35px"}}>Projects</span><br />
        <span className='ms-5' style={{fontSize:"50px", fontFamily:"cursive", color:"#b7c5d3"}}>MY CREATION</span><br />
        <div style={{height:"450px", marginLeft:"110px", float:"left", width:"600px"}}><img src={person2} alt="person"  style={{height:"100%", width:"100%"}} /></div>
        <div className='prj'>
        <div className='prj-container'>
        <img src={project1} alt="Project pic" />
        <img src={project2} alt="Project pic" />
        <img src={project3} alt="Project pic"  />
        </div>
        </div>

        </div> 
    </>
  )
}

export default project
