import { LOGO_URL } from "../utils/constants";

const AppHeader = () => {
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

export default AppHeader;
