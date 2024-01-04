import Star from "../../assets/star.svg";
import "./restaurantCard.css";

export const RestaurantCard = (props) => {
    const { name, cuisines, avgRatingString, deliveryTime, cloudinaryImageId } = props.resData;
    const imageLink =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        cloudinaryImageId;

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
