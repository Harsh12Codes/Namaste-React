import React from "react";
import ReactDOM from "react-dom/client";
import Star from "./assets/star.svg";
import { filteredData } from "./data";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <span>Restaur</span>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="list-item">Home</li>
                    <li className="list-item">About</li>
                    <li className="list-item">Contact</li>
                    <li className="list-item">Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { name, cuisines, avgRatingString, deliveryTime } = props.resData;
    console.log(deliveryTime);
    return (
        <div className="res-card">
            <div className="res-img">
                <img src="https://static.toiimg.com/photo/51892394.cms" alt="restaurant-image" />
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

const Body = () => {
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="res-container">
                {filteredData.map((restaurant) => {
                    return <RestaurantCard resData={restaurant} />;
                })}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
