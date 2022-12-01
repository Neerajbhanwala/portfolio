import React from 'react'
import '../Style/Services.css'
function Services() {

  return (
    <>
<div id="Services" className='services-main p-5'>
<span className='ms-5' style={{fontSize:'35px'}}>Services</span><br />
      <span className='ms-5' style={{fontSize:'40px', color:'rgb(183 197 211)', fontFamily:'Papyrus'}}><b>What I Offer</b></span><br />
     <div className='service-content'>
     <div className='hoverme'></div>
      <h4><b>Web Development</b></h4>
     </div>
     <div className='service-content'>
      <div className='hoverme'></div>
     <h4><b>UI/ UX Designing</b></h4><br />
     {/* <h5>
      In publishing and graphic designing, Loeram ipsum is a placeholder text commonly used to demonstrate
      the visual form of a document elying on mean.
     </h5> */}
     </div>
     <div className='service-content'>
     <div className='hoverme'></div>
     <h4><b>Photoshop Editing</b></h4>
     </div>
</div>
    </>
  )
}

export default Services
