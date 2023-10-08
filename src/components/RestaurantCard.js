import { COULDINARY_URL } from "../utils/constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
  }) => {
    
    return(
        <div className="restaurant_card" style={{backgroundColor: "lightgrey"}}>
            <img src={COULDINARY_URL + cloudinaryImageId} alt="Restaurant Image"/>
            <h4>{name}</h4>
            <div className="card_meta">
                <h5>{cuisines.join(", ")}</h5>
                <h5>{avgRating}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;