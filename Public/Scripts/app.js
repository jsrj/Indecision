'use strict';

console.log('app.js is running.');

$('.ui.modal').modal('hide');

var appRoot = document.getElementById('react-template-target');
var userRoot = document.getElementById('user');
var cntrRoot = document.getElementById('counter');
var decision = document.getElementById('decision');

// JSX
var responses = ["cool!", "right on, dude!", "I'll do it!", "okay. But I don't wanna.", "Yas!", "Thanks!"];

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

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    // Holds whatever value was placed inside the element with the name 'option', which is the input field in this case.
    var option = event.target.elements.option.value;
    if (option && option != '') {
        app.options.push(option);
    }
    event.target.elements.option.value = '';
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

var showDecision = function showDecision(choice) {
    var decisionModal = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                { className: 'ui header answer' },
                React.createElement(
                    'h1',
                    { className: 'modal-head' },
                    choice.toUpperCase()
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'actions' },
            React.createElement(
                'div',
                { className: 'ui positive right labeled icon button thanks' },
                responses[Math.floor(Math.random() * responses.length)]
            )
        )
    );

    ReactDOM.render(decisionModal, decision);
};

var makeDecision = function makeDecision() {
    var maxInRange = app.options.length;
    var choice = Math.floor(Math.random() * maxInRange);
    choice = choice < 0 || choice == undefined ? 0 : choice;
    showDecision(app.options[choice]);
    $('.ui.modal').modal('show');
};

var render = function render() {
    var keyNum = app.options.length - 1;
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'head-container' },
            React.createElement(
                'h1',
                { className: 'head', id: 'jsx-h1' },
                app.title,
                ' | '
            ),
            app.subtitle && React.createElement(
                'h3',
                { className: 'head' },
                app.subtitle
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit, className: 'ui form add-option' },
            React.createElement(
                'label',
                { htmlFor: 'option', className: 'ui label' },
                app.options.length > 0 ? 'You have ' + app.options.length + ' option' + (app.options.length > 1 ? 's' : '') + ':' : 'Enter an option:'
            ),
            React.createElement('input', { type: 'text', name: 'option', className: 'ui input option', id: 'choice-input' })
        ),
        React.createElement(
            'div',
            { className: 'buttons-container' },
            React.createElement(
                'button',
                { type: 'none', onClick: makeDecision, className: 'ui button make-decision' },
                'What Should I Do?'
            ),
            React.createElement(
                'div',
                { className: 'add-remove-container' },
                React.createElement(
                    'button',
                    { type: 'submit', className: 'ui blue button options-button' },
                    'Add Option'
                ),
                React.createElement(
                    'button',
                    { type: 'submit', onClick: clearItems, className: 'ui red button remove' },
                    'Remove All'
                )
            )
        ),
        app.options.length > 0 && React.createElement(
            'ul',
            { className: 'ui segments options-list' },
            app.options.map(function (opti, i) {
                return opti != null && React.createElement(
                    'li',
                    { key: i, className: 'ui segment user-option', id: 'choice' + i },
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
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
