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

const RestrauntCard = (props) => {
    const { resData } = props; // props destructuring and further using resData 
    const { resName, cuisine, rating } = resData?.data;
    return (
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src="https://www.ruchiskitchen.com/wp-content/uploads/2019/01/Shahi-Veg-Biryani-Recipe-01.jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{deliverytime}</h4>
            <h4>{resData.data.deliverytime}</h4>
        </div>
    );
}

const resObj = {
    type: "restraunt",
    data: {
        resName: "Meghana Foods",
        cuisine: ["Biryani", "North Indian", "Asian", "Comfort Food"],
        rating: "4.4 starts",
        deliverytime: "38 minutes"
    }
}

const Body = () => {
    return (<div className="body">
        <div className="search">
            Search
        </div>
        <div className="restrauntContainer">
            <RestrauntCard
                const resData={resObj}
            />
        </div>
    </div>
    );
}

const Footer = () => {
    return (
        <div></div>
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