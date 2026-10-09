import { logoURL } from "../utils/constant";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img
                    className="logo"
                    src={logoURL}
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
};

export default Header;