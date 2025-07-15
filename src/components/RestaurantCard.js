import { useState } from "react";
import { restaurants } from "../utils/mockData";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = () => {

    const [restaurantList, setRestaurantList] = useState(restaurants);

    return (
        <div>
            <button className="filterButton" onClick={() => {
                    const filteredList = restaurantList.filter(restaurant => restaurant.info.avgRating > 4.5);
                    setRestaurantList(filteredList);
                }}>Filter Top Rated Restaurants</button>
            <div className="res-card-container">
                
            {
                restaurantList.map((restaurant) => (
                    <div key={restaurant.info.id} className="res-card">
                        <img src={CDN_URL+restaurant.info.cloudinaryImageId} alt="Restaurant" className="res-logo" />
                        <h2>{restaurant.info.name}</h2>
                        <p>Rating: {restaurant.info.avgRating}</p>
                        <p>Cuisine: {restaurant.info.cuisines.join(", ")}</p>
                        <p>Delivery Time: {restaurant.info.sla.deliveryTime} mins</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default RestaurantCard;