import React from "react";
import ReactDOM from "react-dom/client";

// transpilled before reaching the javascript engine - Parcel with the help of babel
const jsxHeading = <h1 className="heading" tabIndex="1">Just for testing JSX!</h1>;

// you need to wrap it in round bracket for multiple lines!
const multipleHeading = (<h1 className="heading" tabIndex="1">Just for testing JSX!
</h1>);


console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);