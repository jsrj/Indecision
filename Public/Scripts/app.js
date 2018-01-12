"use strict";

console.log('app.js is running.');

// JSX
var template = React.createElement(
    "h1",
    { "class": "head", id: "jsx-h1" },
    "This is an element generated by React."
);

// let template = React.createElement(
//     "h1",
//     {
//         id:        "jsx-h1",
//         className: "head"
//     },
//     "This is an element generated by React."
// );
// same as template = <h1 class="head" id="jsx-h1"> This is an element generated by React.</h1>
var appRoot = document.getElementById('react-template-target');
ReactDOM.render(template, appRoot);
