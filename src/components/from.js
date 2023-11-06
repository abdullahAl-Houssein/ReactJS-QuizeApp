import React, { Component, useState,} from "react";
import Quiz from "./quiz";
import { useNavigate } from "react-router-dom";



function Userfrom(){
    
    const[name,setname]=useState("")
    const[temp,settemp]=useState(false)
    const nav=useNavigate()
    
   function adminpage(){
     nav('/admin')
   }
    

    function namechage(props){
          setname(props.target.value)
          
    }
    function username(){
        alert(`welcome to the game ${name}`)
        settemp(true)
    }

    
        return(
            <div>
                {temp==false?(
                <div>
                    <h2 className="heading-title">welcome to the React Quiz game</h2>
                    <div className="note">Fill the details before you start the Quize</div>
                <from>
                    <label className="title-heading">
                        Enter your name : 
                        <input type="text" name="name"   onChange={namechage} className="name-feild"></input><br></br>
                    </label>
                    <input type="submit" value="sumbit" onClick={username} className="submit-btn"></input>  
                </from>
                <button onClick={adminpage}>Admin login</button>
                </div>
                ):(
                 <Quiz username={name}></Quiz>
                )}
            </div>
        )
    }
    


export default Userfrom