// Code Keypad Component Here
import { useState } from "react";
function Keypad(){
    const [password , setPassword] = useState("")
    const handleChange = (e) => {
        setPassword(e.target.value)
        console.log("Entering password...")
    }
    return(
        <input 
            type="Password"
            value={password}
            onChange={handleChange}
            />
    )
}
export default Keypad;