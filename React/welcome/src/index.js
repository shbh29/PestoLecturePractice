import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const welcome = <h1> Welcome to learn React!</h1>

const rootEl = document.getElementById("root");


class Welcome extends React.Component {
    constructor () {
        
    }
    render() {
        return <h1> Welcome Shubham to learning react!</h1>
    }
}

ReactDOM.render(<Welcome />, rootEl);