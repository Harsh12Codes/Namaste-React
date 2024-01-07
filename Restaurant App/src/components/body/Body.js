import { useEffect, useState } from "react";
import "./body.css";
import { RestaurantCard } from "../card/RestaurantCard";
import Shimmer from "../shimmer/Shimmer";

export const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [restro, setRestro] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8947446&lng=75.8301169&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        );

        const json = await data.json();
        const restaurants =
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const newData = restaurants.map((shop) => {
            const { id, name, cuisines, avgRatingString, sla, cloudinaryImageId } = shop.info;
            const { deliveryTime } = sla;
            return { id, name, cuisines, avgRatingString, deliveryTime, cloudinaryImageId };
        });

        setListOfRestaurant(newData);
        setRestro(newData);
    };

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body-container">
            <div className="top-btn">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search restaurant"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            const searchData = listOfRestaurant.filter((res) => {
                                return res.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setRestro(searchData);
                        }}
                    >
                        search
                    </button>
                </div>
                <button
                    onClick={() => {
                        if (restro !== listOfRestaurant) {
                            setRestro(listOfRestaurant);
                        } else {
                            const topRated = listOfRestaurant.filter((restaurant) => {
                                return restaurant.avgRatingString > 4.2;
                            });

                            setRestro(topRated);
                        }
                    }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="res-container">
                {restro.map((restaurant) => {
                    return <RestaurantCard key={restaurant.id} resData={restaurant} />;
                })}
            </div>
        </div>
    );
};
