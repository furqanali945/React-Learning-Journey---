import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";
import restaurantList from "../utils/mockdata";

// body component
const Body = () => {

    //local state variable 
    const [ListOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            <div className="filter">
               <button className="btn-filter" 
                onClick={() => {
                    // filter logic
                    const FilteredList = ListOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(FilteredList);
                 }}>
                Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant_container">
                {ListOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </div>
    )
}

export default Body;