import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";

// body component
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant_container">
                {restaurantList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </div>
    )
}

export default Body;