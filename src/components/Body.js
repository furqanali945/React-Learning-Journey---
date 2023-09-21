import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";

// body component
const Body = () => {
    let ListOfRestaurants = [
        {
            data: {  
                id: "3456778",
                name : "Dominos",
                cloudinaryImageId: "bz9zkh2aqywjhpankb07",
                cuisines: [ "Burger", "american", "fast food"],
                avgRating: "4.5"
            }
        },
        {
            data: {  
                id: "3456745",
                name : "KFC",
                cloudinaryImageId: "bz9zkh2aqywjhpankb07",
                cuisines: [ "Burger", "american", "fast food"],
                avgRating: "3.5"
            }
        },
        {
            data: {  
                id: "3453745",
                name : "MCD",
                cloudinaryImageId: "bz9zkh2aqywjhpankb07",
                cuisines: [ "Burger", "american", "fast food"],
                avgRating: "4.1"
            }
        },
    ];

    console.log(ListOfRestaurants);

    return (
        <div className="body">
            <div className="filter">
               <button className="btn-filter" 
                onClick={() => {
                    // filter logic
                    ListOfRestaurants = ListOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    )
                    console.log("AFTER FILTRATION!:");
                    console.log(ListOfRestaurants);
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