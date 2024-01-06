import Star from "../../assets/star.svg";
import { IMAGECDN_URL } from "../../utils/constant";
import "./restaurantCard.css";

export const RestaurantCard = (props) => {
    const { name, cuisines, avgRatingString, deliveryTime, cloudinaryImageId } = props.resData;
    const imageLink = IMAGECDN_URL + cloudinaryImageId;

    return (
        <div className="res-card">
            <div className="res-img">
                <img src={imageLink} alt="restaurant-image" />
            </div>
            <div className="res-details">
                <span className="res-name">{name}</span>
                <span className="res-cuisine">{cuisines.join(", ")}</span>
            </div>
            <div className="res-features">
                <div className="res-rating">
                    <span>{avgRatingString}</span>
                    <img src={Star} alt="" />
                </div>
                <div className="res-delivery-time">
                    <span>{deliveryTime} min</span>
                </div>
            </div>
        </div>
    );
};
