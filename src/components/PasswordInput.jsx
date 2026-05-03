import React from 'react';

function PasswordInput (){
    function handleChange() {
        console.log("Entering password...")
    }
    return(
        <input type="password" placeholder="Enter your password" onChange={handleChange}/>
    )
}

export default PasswordInput;

// PasswordInput:
// Add a change event to the <input>