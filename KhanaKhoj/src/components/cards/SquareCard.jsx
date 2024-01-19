import "./squarecard.css";
import starIcon from "../../assets/images/star.svg";
import longX from "../../assets/images/longx.jpg";
import longY from "../../assets/images/longy.jpg";
import fit from "../../assets/images/fit.jpg";
import squareImage from "../../assets/images/square.jpg";

export default function SquareCard(props) {
    const { name, cuisines, avgRatingString, deliveryTime, cloudinaryImageId } =
        props.restaurantCardData;
    return (
        <div className="square-card">
            <div className="square-image">
                <img
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        cloudinaryImageId
                    }
                    alt="image"
                />
            </div>
            <div className="square-details">
                <span className="square-name">{name}</span>
                <span className="square-cuisine">{cuisines.join(", ")}</span>
            </div>
            <div className="square-features">
                <div className="square-rating">
                    <span>{avgRatingString}</span>
                    <img src={starIcon} alt="" />
                </div>
                <div className="square-delivery-time">
                    <span>{deliveryTime} min</span>
                </div>
            </div>
        </div>
    );
}
