/*import RestrauntCard from "./RestrauntCard";
import { resObj } from "../utils/mockData"
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
};

export default Body;*/
import RestrauntCard from "./RestrauntCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (<>
        <button className="filter-button" onClick={() => { alert("Filter button clicked") }}>
            Filter Restraunt
        </button>
        <div className="res-container">
            {resList.map((restaurant) => (
                <RestrauntCard key={restaurant.data.resName} resList={restaurant} />
            ))}
        </div> </>
    );
}

export default Body;