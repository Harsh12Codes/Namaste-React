import { useEffect, useState } from "react";
import "./home.css";
import RestaurantCard from "../../components/card/RestaurantCard";
import Shimmer from "../../components/shimmer/Shimmer";

export default function Home() {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // For production build
        // const response = await fetch(
        //     "https://cors-anywhere.herokuapp.com/" +
        //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8947446&lng=75.8301169&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        // );

        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8947446&lng=75.8301169&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        );

        const json = await response.json();
        const restaurants =
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const extractedDetails = restaurants.map((shop) => {
            const { id, name, cuisines, avgRatingString, sla, cloudinaryImageId } = shop.info;
            const { deliveryTime } = sla;
            return { id, name, cuisines, avgRatingString, deliveryTime, cloudinaryImageId };
        });

        setListOfRestaurant(extractedDetails);
        setFilteredData(extractedDetails);
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
                            setFilteredData(searchData);
                        }}
                    >
                        search
                    </button>
                </div>
                <button
                    onClick={() => {
                        if (filteredData !== listOfRestaurant) {
                            setFilteredData(listOfRestaurant);
                        } else {
                            const topRated = listOfRestaurant.filter((restaurant) => {
                                return restaurant.avgRatingString > 4.2;
                            });

                            setFilteredData(topRated);
                        }
                    }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredData.map((restaurant) => {
                    return <RestaurantCard key={restaurant.id} resData={restaurant} />;
                })}
            </div>
        </div>
    );
}
