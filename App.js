import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Just for testing JSX!</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);