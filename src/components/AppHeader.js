import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {

    const [IsloggedIn, setIsLoggedIn] = useState("Login");

    return (
        <div className="header">
            <div>
            <Link to="/">
                <img width="200px" src={LOGO_URL} />
            </Link>
            </div>
            <div className="nav_items">
                <ul>
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="#">Cart</Link></li>
                    
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
