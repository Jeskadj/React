

import NotificationComponent from './NotificationComponent'

function DetailComponent(props) {
    
    return(
        <div>
           
           <div>Detail Component</div>
               
                <NotificationComponent 
                firstname={props.Detailfirstname} 
                lastname={props.Detaillastname}
                Notificationemail={props.email}
                Notificationdateofbirth={props.dateofbirth}
                mobile={props.mobile}
                />
        
         </div>   
    )
}

export default DetailComponent;
