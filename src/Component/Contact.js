import React from 'react'
import '../Style/Contact.css';

function Contact() {
  function myFunction() {
    var a = prompt("Enter your name");
    var b = prompt("Enter your email");
    var c = prompt("Enter any message");
    let x = document.getElementById("fname");
    let y = document.getElementById("email");
    let z = document.getElementById("textarea");
    alert("Are you sure that your name is " +a+ " / Your email id is " +b+ " / Your message is "+c)
    x.value = (a);
    y.value = (b);
    z.value = (c);
  }
  function clk(){
    let x = document.getElementById("fname");
    let y = document.getElementById("email");
    let z = document.getElementById("textarea");
    if(x,y,z.value===""){
    alert("Please provide input firstly");
    }
    else{
    x.value = ("");
    y.value = ("");
    z.value = ("");
    alert("Data Saved successfully");
  }
  }
  return (
    <>
     <div id="Contact" className='mains p-5'>
        <span className='ms-5 text-light' style={{fontSize:"35px"}}>Contact me</span><br /> 
        <span className='ms-5' style={{fontSize:"50px", fontFamily:"cursive", color:"#b7c5d3"}}>Get In Touch</span><br />   
        <input  onClick={myFunction} id="fname" type="text" placeholder="Name" />
        <a href="https://accounts.google.com/" target="_"><div className="mail"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; kukaa904@gmail.com</div></a>
        <input id="email" type="text" disabled placeholder="Email" />
        <a href="https://neeraj-bhanwala-kukaa.business.site/#details" target="_"><div className="mail"><i class="fa fa-phone" aria-hidden="true"></i> +91-99966-89916</div></a>
        <textarea id="textarea" disabled placeholder="Message"></textarea><br />
        <button onClick={clk}>Submit</button>
    </div> 
    <div className=' mt-2 mb-3 text-center'>
      <h2>John Alex</h2>
      <h6>NeerajBhanwala@All CopyRights Reserved 2022</h6>
    
    </div>
    </>
  )
}

export default Contact
