import React from 'react';

function SideBar({ counts }) {
    return (
        <div className="side-bar">
            <button onClick={
                ()=>{
                    counts[1]( false );
                }
            }>X</button>
            <h1>Cortex</h1>
            <span><p>CopyWriter</p></span>
            <p>Services</p>
            <p>About</p>
            <p>Chatbot</p>
            <p>Techniques</p>
            <p>Samples</p>
            <p>Reviews</p>
            <p>Contact</p>
            <p>Case Studies</p>
            <p>Ausbeds Chatbots</p>
            <p>Blaze Reband</p>
            <p>Atlassian Content Design</p>
            <p>Blogs</p>
        </div>
    );
}
export default SideBar;