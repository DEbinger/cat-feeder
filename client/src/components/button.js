import React, { Component } from "react"
//import { Component } from 'react';

class Button extends React.Component {
    // var handleIt = () => {
    //     alert("Fuck Off Nick");
    // }

    render () {
        return(
            <button onClick={function handleIt(){
                alert("Fuck Off Nick");
            }} >
                For Nicks Only
            </button>
        )
    }
}

export default Button