import { useEffect, useState } from "react"
import { SINGLE_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

    const RestaurantMenu = () => {    

    const [MenuData, setMenuData] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    // making api call
    const fetchData = async () => {
        const data = await fetch(SINGLE_MENU_API + resId);
        const json = await data.json();
        setMenuData(json.data);    
    };

    if(MenuData ===  null){
        return <Shimmer />;
    }

    const {name, cuisines} = MenuData.cards[0].card.card.info;
    const {itemCards} = MenuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    return(
        <div className="menu_main">
            <h1>{name} </h1>
            <p>{cuisines.join(",")}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - PKR {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;