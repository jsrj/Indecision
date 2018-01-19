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
    // {app.options.map((option) => {
    //     if (option != RegExp((<li></li>)\W)) {
    //         option = <li key={`${(app.options.length-1)}`} className="ui segment">{option}</li>
    //     } else {
    //         option = option
    //     }
    // })}

    event.target.elements.option.value = '';
    console.log(app.options);

    render();
};
var clearItems = function clearItems(event) {
    event.preventDefault();
    app.options = [];
    render();
};
var removeOne = function removeOne(index) {
    app.options[index] = null;
    render();
};

var render = function render() {
    var keyNum = app.options.length - 1;
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
            'ul',
            { className: 'ui segments' },
            app.options.map(function (opti, i) {
                return opti != null && React.createElement(
                    'li',
                    { key: i, className: 'ui segment user-option' },
                    opti,
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return removeOne(i);
                            }, className: 'removeOne' },
                        ' X '
                    )
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit, className: 'ui form add-option' },
            React.createElement(
                'label',
                { htmlFor: 'option', className: 'ui label' },
                'Option:'
            ),
            React.createElement('input', { type: 'text', name: 'option', className: 'ui input option' }),
            React.createElement(
                'button',
                { type: 'submit', className: 'ui blue button options-button' },
                'Add Option'
            ),
            React.createElement(
                'button',
                { type: 'submit', onClick: clearItems, className: 'ui red button options-button remove' },
                'Remove All'
            )
        )
    );

    ReactDOM.render(template, appRoot);
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

ReactDOM.render(userInfo, userRoot);
render();
