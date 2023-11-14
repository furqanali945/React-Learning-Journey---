import { COULDINARY_URL } from "../utils/constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
  }) => {
    
    return(
        <div className="restaurant_card ">
            <img src={COULDINARY_URL + cloudinaryImageId} alt="Restaurant Image"/>
            <h4 className="p-2 text-xl text-center">{name}</h4>
            <div className="card_meta p-2 text-center">
                <h5>{cuisines.join(", ")}</h5>
                <h5>{avgRating}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;