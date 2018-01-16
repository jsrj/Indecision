'use strict';

console.log('app.js is running.');

// JSX

var app = {
    title: 'Indecision',
    subtitle: 'Make tricky decisions with the help of ReactJS!',
    options: ['One thing', 'two thing', 'red thing', 'blue thing']
};
var user = {
    fullName: 'Foo Bar',
    age: 31,
    location: 'Yew Nork City'
};

var getUserLocation = function getUserLocation(location) {
    return location != null && location != '' ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
};

var getUserName = function getUserName(uName) {
    return uName != null && location != '' ? React.createElement(
        'h1',
        null,
        ' Name: ',
        uName
    ) : 'Anonymous';
};

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
var getLastName = function getLastName(fullName) {
    return fullName.split(' ')[1];
};

console.log('First Name: ' + getFirstName(user.fullName) + ', Last Name: ' + getLastName(user.fullName));

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { className: 'head', id: 'jsx-h1' },
        app.title
    ),
    React.createElement('br', null),
    app.subtitle && React.createElement(
        'span',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'There are no options.'
    )
);
var count = 0;
var addOne = function addOne() {
    count++;
    render2();
};
var subOne = function subOne() {
    count--;
    render2();
};
var resetCount = function resetCount() {
    count = 0;
    render2();
};

var userInfo = React.createElement(
    'div',
    null,
    getUserName(user.fullName, 'first'),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        user.age
    ),
    getUserLocation(user.location)
);

var appRoot = document.getElementById('react-template-target');
var userRoot = document.getElementById('user');
var cntrRoot = document.getElementById('counter');

var render2 = function render2() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Count:\xA0',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: subOne },
            '-1'
        ),
        '\xA0 \xA0',
        React.createElement(
            'button',
            { onClick: resetCount },
            'CE'
        )
    );
    ReactDOM.render(templateTwo, cntrRoot);
};

ReactDOM.render(template, appRoot);
ReactDOM.render(userInfo, userRoot);
render2();
