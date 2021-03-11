

function ProfileComponent(props) {
    
    return(
       <div>
           
           <div>Profile Component</div>
           <h1>first name: {props.profilefirstname}</h1>
           <h2>lastname:{props.profilelastname}</h2>
           <h2>email:{props.profileemail}</h2>
           <h2>date of birth:{props.profiledateofbirth}</h2>
           <h2>mobile:{props.profilemobile}</h2>
           
       </div> 
    )
}

export default ProfileComponent;