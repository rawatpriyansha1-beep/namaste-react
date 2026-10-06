import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello, World! Namaste React ");
// React.createElement => Object => HTMLElement(render)

// jsx --> javascript syntax 
//const jsxheading = <h1 id="heading">Hello, Priyansha </h1>
/*const jsxheading = (<h1 className="head"
    tabIndex="1">Hello, Priyansha </h1>)  */

// React Component --> There are two types of recat components 
// 1. Class Based Components --> older way to use 
// 2. Functional Components --> 99.99% this is used in modern raect 

// Componenet name always sytarts with capital letter or it will throw error 

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <h2> {num + number}</h2>
        <AnimalName />
        <h3> console.log("Just learning and testing ")</h3>
        <h1 className="heading"> Namaste Priyansha Ji </h1>
    </div>

);

// component composition is using smaller components insidea component 
// below is example of component composition 
function AnimalName() {
    return <h2>Bruno</h2>;
}

function AnimalImage() {
    return <img src="dog.jpg" />;
}

function AnimalDetails() {
    return <p>Dog • 3 years old • Friendly</p>;
}
const number = 1000;
let num = 2
const AnimalCard = () => {
    return (
        <div>
            {num + number}
            <AnimalImage />
            <AnimalName />
            <AnimalDetails />
        </div>
    );

};




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); 