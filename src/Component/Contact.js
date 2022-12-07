import React from 'react'
import '../Style/Contact.css';

function Contact() {
  return (
    <>
     <div id="Contact" className='mains p-5'>
        <span className='ms-5 text-light' style={{fontSize:"35px"}}>Contact me</span><br /> 
        <span className='ms-5' style={{fontSize:"50px", fontFamily:"cursive", color:"#b7c5d3"}}>Get In Touch</span><br />   
        <input type="text" placeholder="Name" />
        <a href="https://accounts.google.com/" target="_"><div className="mail"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; kukaa904@gmail.com</div></a>
        <input type="text" placeholder="Email" />
        <a href="https://neeraj-bhanwala-kukaa.business.site/#details" target="_"><div className="mail"><i class="fa fa-phone" aria-hidden="true"></i> +91-99966-89916</div></a>
        <textarea placeholder="Message"></textarea><br />
        <button>Submit</button>
    </div> 
    </>
  )
}

export default Contact
