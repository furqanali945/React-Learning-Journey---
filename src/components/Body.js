import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //local state variable 
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
    const [SearchRestaurants, setSearchRestaurants] = useState("");

    // Fetch data from API
    useEffect(() => {
        fetchData();
    }, []);

    // making api call
    const fetchData = async () => {
        try {
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();
            const restaurants =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants || [];

            // Optional chaining and nullish coalescing
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
    };

    // Filter restaurants based on search input
    const handleSearch = () => {
        const searchFilterList = ListOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(SearchRestaurants.toLowerCase())
        );
        setFilteredRestaurants(searchFilterList);
    };

    // Filter top-rated restaurants
    const handleFilterTopRated = () => {
        const filteredList = ListOfRestaurants.filter(
        (res) => res.info.avgRating > 4
        );
        setFilteredRestaurants(filteredList);
    };

    // Conditional rendering
    if (ListOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
          <div className="filter">
            <div className="search_form">
              <input
                type="text"
                className="search_box"
                value={SearchRestaurants}
                onChange={(e) => setSearchRestaurants(e.target.value)}
              />
              <button className="btn_search" onClick={handleSearch}>
                Search
              </button>
            </div>
    
            <button className="btn-filter" onClick={handleFilterTopRated}>
              Top Rated Restaurants
            </button>
          </div>
          <div className="restaurant_container">
            {FilteredRestaurants.map((restaurant) => (
              <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info} />
              </Link>
            ))}
          </div>
        </div>
      );
}

export default Body;