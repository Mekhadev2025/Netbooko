import insta from "../assets/insta.png"
import face from "../assets/face.png"

export function Footer(){
    return  (
     <div style={{display:"flex" ,flexDirection:"column",position:"sticky",backgroundColor:"black",color:"white"}} >
        <div style={{display:"flex" ,padding:"10px",alignItems:"center" }}>
             <img style={{backgroundColor:"white" ,width:"40px" }}src={face}></img>
             <img  style={{backgroundColor:"white" ,width:"40px"}}src={insta}></img>
          </div>
        <h2 style={{fontSize:"5px"}}>© Copyright 2022 Croma. All rights reserved</h2>
     </div>


    )
}

