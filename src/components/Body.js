import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
      return(
        <h1>Looks like you are offline. Please check your internet connection!</h1>
        );

    // Conditional rendering
    if (ListOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
          <div className="filter flex justify-center m-4 p-4 gap-5">
            <div className="search_form">
              <input
                type="text"
                className="search_box border-2 border-black p-2"
                value={SearchRestaurants}
                onChange={(e) => setSearchRestaurants(e.target.value)}
              />
              <button className="btn_search border-2 border-black bg-black text-white px-4 py-2" onClick={handleSearch}>
                Search
              </button>
            </div>
    
            <button className="btn-filter border-2 border-black py-2 px-6 bg-black text-white" onClick={handleFilterTopRated}>
              Top Rated Restaurants
            </button>
          </div>
          <div className="restaurant_container flex flex-wrap flex-row justify-center items-stretch">
            {FilteredRestaurants.map((restaurant) => (
              <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id} className="basis-80 m-2 my-4 bg-neutral-800 text-white flex ">
                <RestaurantCard {...restaurant.info} />
              </Link>
            ))}
          </div>
        </div>
      );
}

export default Body;