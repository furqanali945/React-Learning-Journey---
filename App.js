import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement('div',{className: "parent"},[
    React.createElement('div', {className: "child"} , [
        React.createElement('h1', {} , "First Child Headign 1"),
        React.createElement('h2', {} , "First Child Headign 2"),
    ]),
    React.createElement('div', {className: "child"} , [
        React.createElement('h1', {} , "First Child Headign 1"),
        React.createElement('h2', {} , "First Child Headign 2"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
