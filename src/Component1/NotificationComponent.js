

import ProfileComponent from './ProfileComponent'

function NotificationComponent(props) {
    
    return(
        <div>
           
           <div>Notification Component</div>
               
                <ProfileComponent 
                profilefirstname={props.firstname} 
                profilelastname={props.lastname}
                profileemail={props.Notificationemail}
                profiledateofbirth={props.Notificationdateofbirth}
                profilemobile={props.mobile}
                />
        
         </div>   
    )
}

export default NotificationComponent;
