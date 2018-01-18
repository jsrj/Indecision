'use strict';

console.log('app.js is running.');

var appRoot = document.getElementById('react-template-target');
var userRoot = document.getElementById('user');
var cntrRoot = document.getElementById('counter');

// JSX

var app = {
    title: 'Indecision',
    subtitle: 'Make tricky decisions with the help of ReactJS!',
    options: []
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

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    // Holds whatever value was placed inside the element with the name 'option', which is the input field in this case.
    var option = event.target.elements.option.value;
    if (option && option != '') {
        app.options.push(option);
    }
    event.target.elements.option.value = '';
    console.log(app.options);

    render();
};
var clearItems = function clearItems(event) {
    event.preventDefault();
    app.options = [];
    render();
};

var render = function render() {
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
            app.options.length > 0 ? 'You have ' + app.options.length + ' option' + (app.options.length > 1 ? 's' : '') + ':' : 'There are no options.'
        ),
        app.options.length > 0 && React.createElement(
            'ol',
            null,
            app.options.length > 0 && React.createElement(
                'li',
                null,
                ' ',
                app.options[0]
            ),
            app.options.length > 1 && React.createElement(
                'li',
                null,
                ' ',
                app.options[1]
            ),
            app.options.length > 2 && React.createElement(
                'li',
                null,
                ' ',
                app.options[2]
            ),
            app.options.length > 3 && React.createElement(
                'li',
                null,
                ' ',
                app.options[3]
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement(
                'label',
                { htmlFor: 'option' },
                'Option:'
            ),
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Option'
            )
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { type: 'submit', onClick: clearItems },
            'Remove All'
        )
    );

    ReactDOM.render(template, appRoot);
};
// const template = (
//     <div>
//         <h1 className="head" id="jsx-h1">{app.title}</h1>
//         <br />
//         {(app.subtitle) && <span>{app.subtitle}</span>}
//         <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no options.'}</p>
//         { app.options.length > 0 &&
//             <ol>
//                 <li>{app.options.length > 0 && app.options[0]}</li>
//                 <li>{app.options.length > 1 && app.options[1]}</li>
//                 <li>{app.options.length > 2 && app.options[2]}</li>
//                 <li>{app.options.length > 3 && app.options[3]}</li>
//             </ol>
//     }
//         <form onSubmit={onFormSubmit}>
//             <label htmlFor="option">Option:</label>
//             <input type="text" name="option" />
//             <button type="submit">Add Option</button>
//         </form>
//     </div>
// );

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

ReactDOM.render(userInfo, userRoot);
render();
