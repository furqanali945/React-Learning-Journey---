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
- footer component
    - copyright
    - links
    - Contact Info
 */


// transpilled before reaching the javascript engine - Parcel with the help of babel
// const jsxHeading = <h1 className="heading" tabIndex="1">Just for testing JSX!</h1>;

// // you need to wrap it in round bracket for multiple lines!
// const multipleHeading = (<h1 className="heading" tabIndex="1">Just for testing JSX!
// </h1>);

// console.log(jsxHeading);

// // React Component
// // Class based components - old way 
// // Functional components -  new way 


// // react element
// const heading = (<h1 className="heading" tabIndex="1">Just for testing JSX!
// </h1>);

// const Title = () => (
//     <h1 className="heading" tabIndex="1">This is a Heading Component!</h1>
// );

// // the other arrow function way | react functional component | We'll stick to this syntax
// // this is also an example of component composition
// const Header = () => (
//     <div className="container"> 
//         <Title />
//         <h2 className="heading">Namaste React Functional Component!</h2>
//         <h3>{1+2}</h3>
//     </div>  
// );

const Header = () => {
    return (
        <div className="header">
            <div>
                <img width="200px" src="https://belapay.com/wp-content/uploads/2021/04/166-1665242_fakery-logo-transparent-dummy-logo-png-clipart.jpg" />
            </div>
            <div className="nav_items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);