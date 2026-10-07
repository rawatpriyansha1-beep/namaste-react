import React from 'react';
import ReactDOM from 'react-dom/client';

/* // Food Ordering app - Planning and wire frame designing 
1. Header
-logo
-nav {menu items [home,about,cart]}
2. Body
-search bar (input)
-RestrauntContainer containing -->card container for restraunt or cuisine [img, name of restraunt, star rating, cuisine, delivery time , distance]
3. Footer
-Copyright
-Links
-Address
-Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div>
                <img
                    className="logo"
                    src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestrauntCard = () => {
    return (
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    );
}

const Body = () => {
    return (<div className="body">
        <div className="search">
            Search
        </div>
        <div className="restrauntContainer">
            <RestrauntCard />
        </div>
    </div>
    );
}

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>

    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />); 