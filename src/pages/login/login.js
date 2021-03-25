import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Visibility } from '@material-ui/icons';
import { useContextStore } from '../../store/context';
// import './signinup.css'


function Login(){
    
    let history= useHistory()
    const{state,dispatch,brandname} = useContextStore()

    
   
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    const[isLoading,setIsLoading]=useState(false)
    

    function goToPage(path) {
        
        history.push(path)
    
    }

    function updateUsername(e) {
        setUsername(e.target.value)
    }
    
    function updatePassword(e) {
        setPassword(e.target.value)
    }
    
    function  submit(e) {
        e.preventDefault();
        setIsLoading(true)
    

    if (username == 'allen' && password == 'test'){
        // implement go to dashboard here
        goToPage('/dashboard')
    } else {
        // stay on login page
        setMessage("wrong username or password")
        setIsLoading(false)
    } 

    
}

    return(
        <form>
            <h1>{brandname}</h1>
            {message && <h1 style={{color:"red"}}>{message}</h1>}
            {isLoading && <div>loading...</div>}
            <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="Username" onChange={updateUsername} className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Password" onChange={updatePassword} className="form-control"/>
                <Visibility style={{color:'black'}}/>
            </div>

            <button onClick={submit}>Submit</button>
            <button onClick={()=>goToPage('/signup')}>Signup</button>
            
        </form> 
    )
    
}

export default Login