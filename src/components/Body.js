import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useEffect, useState } from "react";
import restaurantList from "../utils/mockdata";

// body component
const Body = () => {

    //local state variable 
    const [ListOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    useEffect(() => {
        fetchData();
    }, []);

    
    // making api call
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
    };


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