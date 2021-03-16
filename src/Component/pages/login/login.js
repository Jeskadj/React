import React, {useState} from 'react';

import './login.css'
function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

function updateUsername(e) {

    setUsername(e.target.value)
    
}

function updatePassword(e) {

    setPassword(e.target.value)
    
}
function submit(e) {
    e.preventDefault()
    console.log({username,password});

//  sends the username and password to the Server 
 
 fetch('google.com',{username,password})
 .then (response=>{

},err=>err)

}



    return(
        
            <form>
                <div class="form-group">
                      <label htmlFor="">Username</label>
                      <input type="text" value={username} onChange={updateUsername} class="form-control"/>

                </div>

                <div class="form-group">
                    <input type="password" value={password} onChange={updatePassword} class="form-control"></input>
                    <label htmlFor="" >Password</label>

                </div>
                <button class="login-btn">Login</button>
                <button class="cancel-btn">Cancel</button>
            </form>

    
    )
    
}

export default Login;