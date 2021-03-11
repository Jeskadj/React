import DetailComponent from './DetailComponent'

function DashboardComponent(props) {
    
    return(
        <div>
           
           <div>Dashboard Component</div>
               
                <DetailComponent 
                Detailfirstname={props.firstname} 
                Detaillastname={props.lastname}
                email={props.email}
                dateofbirth={props.date_of_birth}
                mobile={props.mobile}
                />
        
         </div>   
    )
}

export default DashboardComponent;