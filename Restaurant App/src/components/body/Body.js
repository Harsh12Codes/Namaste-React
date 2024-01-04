import "./body.css";
import { filteredData } from "../../utils/data";
import { RestaurantCard } from "../card/RestaurantCard";

export const Body = () => {
    return (
        <div className="body-container">
            <div className="res-container">
                {filteredData.map((restaurant) => {
                    return <RestaurantCard key={restaurant.id} resData={restaurant} />;
                })}
            </div>
        </div>
    );
};
