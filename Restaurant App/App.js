import React from "react";
import ReactDOM from "react-dom/client";
import Star from "./assets/star.svg";

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

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <div className="res-img">
                <img src="https://static.toiimg.com/photo/51892394.cms" alt="restaurant-image" />
            </div>
            <div className="res-details">
                <span className="res-name">50 Kalò</span>
                <span className="res-cuisine">Italian, New-York, Sicillian</span>
            </div>
            <div className="res-features">
                <div className="res-rating">
                    <span>4.9</span>
                    <img src={Star} alt="" />
                </div>
                <div className="res-delivery-time">
                    <span>30 min</span>
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
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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
