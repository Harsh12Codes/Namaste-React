import { useEffect, useState } from "react";
import "./restaurants.css";
import SquareCard from "../../components/cards/SquareCard";
import Shimmer from "../../components/shimmer/Shimmer";
import { Link } from "react-router-dom";

export default function Restaurants() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const response = await fetch(
        //     "https://cors-anywhere.herokuapp.com/" +
        //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8947446&lng=75.8301169&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        // );

        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8947446&lng=75.8301169&is-seo-homepage-enabled=true",
        );
        const responseJson = await response.json();
        console.log(responseJson);
        const restaurants =
            responseJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const filteredDetails = restaurants.map((shop) => {
            const { id, name, cuisines, avgRatingString, sla, cloudinaryImageId, veg, costForTwo } =
                shop.info;
            const { deliveryTime } = sla;
            return {
                id,
                name,
                cuisines,
                avgRatingString,
                deliveryTime,
                cloudinaryImageId,
                veg,
                costForTwo,
            };
        });

        setListOfRestaurants(filteredDetails);
        setfilteredList(filteredDetails);
    };

    const handleFastDelivery = () => {
        const fastDeliveryOutput = listOfRestaurants.filter((res) => res.deliveryTime < 30);
        setfilteredList(fastDeliveryOutput);
    };

    const handleVeg = () => {
        const vegOutput = listOfRestaurants.filter((res) => res.veg === true);
        setfilteredList(vegOutput);
    };

    const handleRating = () => {
        const ratingOutput = listOfRestaurants.filter((res) => Number(res.avgRatingString) > 4.2);
        setfilteredList(ratingOutput);
    };

    const handleRange = (rangeKey) => {
        const rangeOutput = listOfRestaurants.filter((res) => {
            const cost = res.costForTwo.match(/\d+/g).map(Number)[0];
            if (rangeKey === 1) return cost >= 300 && cost <= 600;
            else if (rangeKey === 2) return cost < 300;
        });
        setfilteredList(rangeOutput);
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="restaurants">
            <div className="filters">
                <div className="filters-search">
                    <label>
                        <input
                            type="text"
                            placeholder="Search restaurant"
                            className="filters-search-size"
                            value={searchRestaurant}
                            onChange={(e) => setSearchRestaurant(e.target.value)}
                        />
                    </label>
                    <button
                        className="search-btn filters-search-size"
                        onClick={() => {
                            const searchOutput = listOfRestaurants.filter((res) =>
                                res.name.toLowerCase().includes(searchRestaurant.toLowerCase()),
                            );
                            setfilteredList(searchOutput);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="filters-items">
                    <button className="filter-btn" onClick={handleFastDelivery}>
                        Fast Delivery
                    </button>
                    <button className="filter-btn" onClick={handleVeg}>
                        Pure Veg
                    </button>
                    <button className="filter-btn" onClick={handleRating}>
                        Ratings 4.2+
                    </button>
                    <button className="filter-btn" onClick={() => handleRange(1)}>
                        Rs. 300-Rs. 600
                    </button>
                    <button className="filter-btn" onClick={() => handleRange(2)}>
                        Less than Rs. 300
                    </button>
                </div>
            </div>
            <div className="res-cards">
                {filteredList.map((res) => (
                    <Link key={res.id} to={`/restaurant/${res.id}`}>
                        <SquareCard key={res.id} restaurantCardData={res} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
