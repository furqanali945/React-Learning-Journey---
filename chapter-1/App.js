/**
 * 
 * <div class="parent">
 *      <div class="child">
 *          <h1>First Child Heading 1</h1>
 *          <h2>First Child Heading 2</h2>
 *      </div>
 *      <div class="child">
 *          <h1>First Child Heading 1</h1>
 *          <h2>First Child Heading 2</h2>
 *      </div>
 * </div>
 */

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

