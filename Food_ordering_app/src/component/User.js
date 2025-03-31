import { useState } from "react";

const User=({Name})=>{
    const [count] = useState(0);
    const[count2] = useState(1);
    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h2>Count2={count2}</h2>
            <p>Name:{Name}</p>
            <p>Address:Berlin,Germany</p>
            
        </div>
    )
}
export default User;