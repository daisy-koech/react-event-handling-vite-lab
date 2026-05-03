import React from 'react';

function SubmitButton (){
    function handleEnter() {
        console.log("Mouse Entering");
    }
    function handleLeave() {
        console.log("Mouse Exiting")
    }
    return(
        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Submit Password</button>
    )
}

export default SubmitButton;

// Create a SubmitButton React component
// Render a <button> with the text “Submit Password”

// Add a mouse enter event to the <button>
// Add a mouse leave event to the <button>