import React, {useState} from 'react'
import '../Style/Skills.css'
import figma from "../Image/figma.png";
import node from "../Image/node.png";
import photoshop from "../Image/photoshop.png";
import logo from "../Image/logo.png";
import Sketch from "../Image/Sketch.png";
import python from "../Image/python.png";

function Skills() {
  const[fig,setFig]=useState(false)
  const[nod,setNod]=useState(false)
  const[adb,setAdb]=useState(false)
  const[rct,setRct]=useState(false)
  const[skh,setSkh]=useState(false)
  const[ptn,setPtn]=useState(false)
  return (
    <>
          
     <div id="skill" className='skills-main p-5'>
      <span className='ms-5' style={{fontSize:'40px'}}>Skills</span><br />
      <span className='ms-5' style={{fontSize:'40px', color:'rgb(183 197 211)', fontFamily:'Papyrus'}}><b>My Top Skills</b></span>
      <div className='opt-main'>
      <div className='opt-in'>
        <div className='opt-logo'>
        <img src={figma} alt="Figma Logo" style={{ height: "100%", width: "100%" }} />
        </div>
        <span><h4 className='mt-1 text-muted'><b>Figma</b></h4></span>
        <span><h6 style={{float:"left"}}><i>Lorem ipsum text dummy</i></h6></span>
        <span className='text-muted' onClick={()=>setFig(true)} style={{fontSize:"20px", position:"absolute", margin:"-40px 0px 0px 90px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
      </div>
      <div className='opt-in'>
        <div className='opt-logo'>
        <img src={node} alt="Node js Logo" style={{ height: "100%", width: "100%" }} />
        </div>
        <span><h4 className='mt-1 text-muted'><b>Node JS</b></h4></span>
        <span><h6 style={{float:"left"}}><i>Lorem ipsum text dummy</i></h6></span>
        <span className='text-muted' onClick={()=>setNod(true)} style={{fontSize:"20px", position:"absolute", margin:"-40px 0px 0px 90px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
      </div>
      <div className='opt-in'>
        <div className='opt-logo'>
        <img src={photoshop} alt="Photoshop Logo" style={{ height: "100%", width: "100%" }} />
        </div>
        <span><h4 className='mt-1 text-muted'><b>Adobe Photoshop</b></h4></span>
        <span><h6 style={{float:"left"}}><i>Lorem ipsum text dummy</i></h6></span>
        <span className='text-muted' onClick={()=>setAdb(true)} style={{fontSize:"20px", position:"absolute", margin:"-40px 0px 0px 90px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
      </div>
      <div className='opt-in'>
        <div className='opt-logo'>
        <img src={logo} alt="React js Logo" style={{ height: "100%", width: "100%" }} />
        </div>
        <span><h4 className='mt-1 text-muted'><b>React JS</b></h4></span>
        <span><h6 style={{float:"left"}}><i>Lorem ipsum text dummy</i></h6></span>
        <span className='text-muted' onClick={()=>setRct(true)} style={{fontSize:"20px", position:"absolute", margin:"-40px 0px 0px 90px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
      </div>
      <div className='opt-in'>
        <div className='opt-logo'>
        <img src={Sketch} alt="Sketch Logo" style={{ height: "100%", width: "100%" }} />
        </div>
        <span><h4 className='mt-1 text-muted'><b>Sketch</b></h4></span>
        <span><h6 style={{float:"left"}}><i>Lorem ipsum text dummy</i></h6></span>
        <span className='text-muted' onClick={()=>setSkh(true)} style={{fontSize:"20px", position:"absolute", margin:"-40px 0px 0px 90px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
      </div>
      <div className='opt-in'>
        <div className='opt-logo'>
        <img src={python} alt="Python Logo" style={{ height: "100%", width: "100%" }} />
        </div>
        <span><h4 className='mt-1 text-muted'><b>Python</b></h4></span>
        <span><h6 style={{float:"left"}}><i>Lorem ipsum text dummy</i></h6></span>
        <span className='text-muted' onClick={()=>setPtn(true)} style={{fontSize:"20px", position:"absolute", margin:"-40px 0px 0px 90px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
      </div>
      </div>
      {
      fig?<div className='discription'>
        <div className='discription-content'>
          <span><img src={figma} alt="Python Logo" style={{ height:"10%", width:"10%", margin:"10px", float:"left" }} /></span>
          <span><h1>Figma</h1></span><br />
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
          </ol>
          <button onClick={()=>setFig(false)}>close</button>
        </div>
      </div>:null
      }

{
      nod?<div className='discription'>
        <div className='discription-content'>
          <span><img src={node} alt="Node JS Logo" style={{ height:"10%", width:"10%", margin:"10px", float:"left" }} /></span>
          <span><h1>Node JS</h1></span><br />
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
          </ol>
          <button onClick={()=>setNod(false)}>close</button>
        </div>
      </div>:null
      }


{
      adb?<div className='discription'>
        <div className='discription-content'>
          <span><img src={photoshop} alt="Node JS Logo" style={{ height:"10%", width:"10%", margin:"10px", float:"left" }} /></span>
          <span><h1>Adobe Photoshop</h1></span><br />
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
          </ol>
          <button onClick={()=>setAdb(false)}>close</button>
        </div>
      </div>:null
      }


{
      rct?<div className='discription'>
        <div className='discription-content'>
          <span><img src={logo} alt="Node JS Logo" style={{ height:"10%", width:"10%", margin:"10px", float:"left" }} /></span>
          <span><h1>React JS</h1></span><br />
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
          </ol>
          <button onClick={()=>setRct(false)}>close</button>
        </div>
      </div>:null
      }


{
      skh?<div className='discription'>
        <div className='discription-content'>
          <span><img src={Sketch} alt="Node JS Logo" style={{ height:"10%", width:"10%", margin:"10px", float:"left" }} /></span>
          <span><h1>Sketch</h1></span><br />
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
          </ol>
          <button onClick={()=>setSkh(false)}>close</button>
        </div>
      </div>:null
      }


{
      ptn?<div className='discription'>
        <div className='discription-content'>
          <span><img src={python} alt="Node JS Logo" style={{ height:"10%", width:"10%", margin:"10px", float:"left" }} /></span>
          <span><h1>Python</h1></span><br />
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, ame.</li>
            <li>Lorem ipsum dolor sit, amet consectetur</li>
            <li>Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem.</li>
          </ol>
          <button onClick={()=>setPtn(false)}>close</button>
        </div>
      </div>:null
      }
      
      </div> 
    
    </>
  )
}

export default Skills
