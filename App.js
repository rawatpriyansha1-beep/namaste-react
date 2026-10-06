import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
//const heading = React.createElement("h1", { id: "heading" }, "Hello, World! Namaste React ");
// React.createElement => Object => HTMLElement(render)

// jsx --> javascript syntax 
//const jsxheading = <h1 id="heading">Hello, Priyansha </h1>
const jsxheading = (<h1 className="head"
    tabIndex="1">Hello, Priyansha </h1>)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading); 