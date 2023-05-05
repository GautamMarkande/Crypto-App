import React, { useState } from "react";

const enableDarkMode = () => {
    const [myStyle, setmyStyle] = useState({
        backgroundColor: "white",
        color: "black",
    });
   
    const [btnStyle, setBtnStyle] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: "1px solid white"
            })
            setBtnStyle("Enable light mode");
        } else {
            setmyStyle({
                color: "black",
                backgroundColor: "white",
            });
            setBtnStyle("Enable dark mode");
        }
    }
    return (
        <button type="button" class="btn btn-primary my-4" onClick={toggleStyle}>
            EnableDarkMode
        </button>
    )
}
export defa