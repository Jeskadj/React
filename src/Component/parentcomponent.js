import ChildComponent from './childcomponent'

function ParentComponent(props) {
    
    return(
        <div>
           
           <div>Parent Component</div>
               
                <ChildComponent 
                childname={props.name} 
                childgender={props.gender}
                childage={props.age}
                childemail={props.email}
                />
        
         </div>   
    )
}

export default ParentComponent;
