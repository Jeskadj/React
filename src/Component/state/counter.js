import React,{ useState } from 'react';



function Counter() {
    const[color1,setColor1]=useState("yellow")
    const [color2, setColor2]=useState("red")
    const [count, setCount] = useState(0)
    const [password,setPassword]=useState(1)
    const [username,setUsername]=useState(2)
    const[color3,setColor3]=useState("blue")
    
    function  sum() {
        setCount(count+3)
        
    }

    function  subtract() {
        setCount(count-1)
        
        
    }

    function  multiply() {
        setCount(count*2)
       
        
        
    }

    
    
    
    return (
        <div>

            <h1>Counter</h1>
            { count }

            <h1>Password</h1>
            {password}
            

            <button style={{background:color2}} onClick={multiply}>Double</button>
            <button style={{background:color3}}onClick={subtract}>Save</button>
            <button style={{background:color1}} onClick={sum}>Submit</button>
            <button onClick={() => setCount(count-1)}>Change State Variable</button>

        </div>
    )
    
}

export default Counter