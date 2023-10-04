import { useEffect } from "react"

const RestaurantMenu = () => {
    useEffect(() => {
        console.log("Hello world");
    },
    []
    );

    return(
        <div className="menu_main">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu