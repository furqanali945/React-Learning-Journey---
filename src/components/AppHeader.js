import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const AppHeader = () => {

    const [IsloggedIn, setIsLoggedIn] = useState("Login");

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
                    <li>
                        <button className="btn_login" onClick={() => {
                                IsloggedIn === "Login" 
                                ? setIsLoggedIn("Logout") 
                                : setIsLoggedIn("Login");
                            }
                            }>
                            {IsloggedIn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;
