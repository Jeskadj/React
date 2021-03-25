import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useContextStore } from '../../store/context';
import './signinup.css'
import image from '../../image/image.jpeg';

function Signup() {
    const{state,dispatch,brandname}=useContextStore()
    const { name } = useContextStore();
    console.log(name);
    return(
    
    <div className="ourform">
        <h1>{brandname}</h1>
     <div style={{backgroundColor:'white' , height:'100vh' ,margin:0, display:'flex' ,justifyContent:'center' , alignItems:'center' }}>
        <form style={{backgroundColor:'white' , boxShadow: '2px -2px 15px 10px dodgerblue' , height:'400px' , width:'300px' , borderRadius:'10px', alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column' }}>
            
            <div className="imagediv">
                <img style={{width:70 , height:70}} src={image} alt="tree"/>
            </div>
            
            <div className="form-group" >
                <label>Username:</label> <br />
                <input type="text" placeholder="Username" className="form-control" />
            </div>
            
            
            <div className="form-group">
                <label>Email:</label> <br />
                <input style={{border:"none", boxShadow : "-2px 2px 2px 2px gray", borderRadius:"10px" , outline:"none" , textAlign:"center",marginBottom:"10px",marginTop:"5px"}} type="email" placeholder="Email" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password:</label> <br />
                  <input type="password" placeholder="Password" className="form-control"/>
                  
            </div>

            <div className="form-group" >
                <label>Confirm Password:</label> < br/>
                <input style={{borderRadius:10,marginTop:6,marginBottom:"10px",boxShadow:"-2px 2px 2px 2px gray",outline:"none",border:"none"}}type="password" placeholder="Confirm password" className="form-control"/>
            </div>
            <div>

            <button style={{paddingTop:"4px", boxShadow:"-2px 2px gray",borderRadius:"10px", outline:"none" ,cursor:"pointer", border:'none' }} className="loginbutton">
             Signup</button>
            </div>
            <div classname="linkdiv">
            <Link to="/">
                <p>Already have an account</p>
                </Link>

            </div>

        </form>

        </div> 
     </div>
  )
    
}

export default Signup
