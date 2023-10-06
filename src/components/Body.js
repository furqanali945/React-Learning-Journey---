import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// body component
const Body = () => {

    //local state variable 
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [FilteredRestaurants, setFilteredRestaurants] = useState([]);

    const [SearchRestaurants, setSearchRestaurants] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    // making api call
    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();

        console.log(json);

        // optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };

    // Conditional rendering
    if (ListOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search_form">
                    <input type="text" className="search_box" value={SearchRestaurants} onChange={(e) =>{
                        setSearchRestaurants(e.target.value);
                    }} />
                    <button className="btn_search" onClick={() => {
                        const SearchFilterList = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(SearchRestaurants.toLowerCase()));
                        setFilteredRestaurants(SearchFilterList);
                    }}
                    >Search</button>
                </div>

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
                {FilteredRestaurants.map((restaurant) => {
                    return (
                    <Link to={"/restaurants/" + restaurant.info.id}>    
                        <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                    </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Body;