/*import { resList } from "../utils/mockData"
const RestrauntCard = ({ resList }) => {
    const { resName, cuisine, rating, deliverytime } = { resList }?.data || {};

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src="https://www.ruchiskitchen.com/wp-content/uploads/2019/01/Shahi-Veg-Biryani-Recipe-01.jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine?.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{deliverytime}</h4>
        </div>
    );
};

export default RestrauntCard;*/

const RestrauntCard = ({ resList }) => {
    const { resName, cuisine, rating, deliverytime } = resList?.data || {};

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src="https://www.ruchiskitchen.com/wp-content/uploads/2019/01/Shahi-Veg-Biryani-Recipe-01.jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine?.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{deliverytime}</h4>
        </div>
    );
};

export default RestrauntCard;