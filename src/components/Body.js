import RestrauntCard from "./RestrauntCard";
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

export default Body;