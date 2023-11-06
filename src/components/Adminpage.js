import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adminpage(){
    const[login,setlogin]=useState({email:'',pass:''})
    const nav=useNavigate()

    function checkadmin(){
        if(login.email=='admin' && login.pass=='admin'){
            return(
                nav('/adminplane')
            )
        }
    }
    return(
        <div>
            <h2 className="heading-title">Hello Admin</h2>
            <from>
                <label className="title-heading">
                    Enter email :
                    <input type="text" name="email"  className="name-feild" onChange={e=>setlogin({...login,email:e.target.value})}></input><br></br>
                </label>
                <label className="title-heading">
                    Password :
                    <input type="password" name="password"  className="name-feild" onChange={e=>setlogin({...login,pass:e.target.value})}></input>
                </label>
                <input type="submit" value="adminsubmit" className="submit-btn" onClick={checkadmin}></input>
            </from>
        </div>
    )
}
export default Adminpage