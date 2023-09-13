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
            - img, restaurant name, star rating, cuisine
- footer component
    - copyright
    - links
    - Contact Info
 */


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

const RestarauntCard = () => {
    return(
        <div></div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant_container">
                
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