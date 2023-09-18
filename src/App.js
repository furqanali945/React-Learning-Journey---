import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import Body from "./components/Body";


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
// why we need unique id as key in looping elements?
// suppose there are a new element added so react will render all of the cards
// so react will not know where they need to add a new card
// but with id it will know exactly where to place the new card.
// it can affect the speed if you don't add the key so always add key on looping items.
// you should never use index as key as in map you will also get index it is marked as bad practice in react documentation.


const AppLayout = () => {
    return (
        <div className="app">
            <AppHeader/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);