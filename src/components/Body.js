import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

// body component
const Body = () => {

    //local state variable 
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    
    // making api call
    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        // optional chaining
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // conditional rendering
    return ListOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
               <button className="btn-filter" 
                onClick={() => {
                    // filter logic
                    const FilteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(FilteredList);
                 }}>
                Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant_container">
                {ListOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
                })}
            </div>
        </div>
    )
}

export default Body;