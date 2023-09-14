import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
- Header Component
    - logo component
    - Nav items
- Body Component
    - search component
    - Restaurant container
        - restaurant card
            - img, restaurant name, star rating, cuisine, delivery time
- footer component
    - copyright
    - links
    - Contact Info
 */

//const styleCard = {backgroundColor: "lightgrey"}


const Header = () => {
    return (
        <div className="header">
            <div>
                <img width="200px" src="https://belapay.com/wp-content/uploads/2021/04/166-1665242_fakery-logo-transparent-dummy-logo-png-clipart.jpg" />
            </div>
            <div className="nav_items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

//const RestaurantCard = (props) => {
// with destrucing 
const RestaurantCard = (props) => {
    //console.log("",props);
    const { resName, cusine, rating, time} = props;
    return(
        <div className="restaurant_card" style={{backgroundColor: "lightgrey"}}>
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="Test Food"/>
            <h4>{resName}</h4>
            <div className="card_meta">
                <h5>{cusine}</h5>
                <h5>{rating}</h5>
                <h5>{time}</h5>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant_container">
                <RestaurantCard 
                    resName="Maghana Foods" 
                    cusine="desi, asian" 
                    rating="4.9" 
                    time="50 mins"
                />
                <RestaurantCard 
                    resName="KFC" 
                    cusine="fast food" 
                    rating="5" 
                    time="39 mins"
                />
                <RestaurantCard 
                    resName="Mcdonalds" 
                    cusine="fast food" 
                    rating="3" 
                    time="40 mins"
                />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);