console.log('app.js is running.')

$('.ui.modal').modal('hide');

const appRoot    = document.getElementById('react-template-target');
const userRoot   = document.getElementById('user');
const cntrRoot   = document.getElementById('counter');
const decision   = document.getElementById('decision');

// JSX
let responses = [
    "cool!",
    "right on, dude!",
    "I'll do it!",
    "okay. But I don't wanna.",
    "Yas!",
    "Thanks!"
];

let app = {
    title:    'Indecision',
    subtitle: 'Make tricky decisions with the help of ReactJS!',
    options: []
};
let user = {
    fullName: 'Foo Bar',
    age:      31,
    location: 'Yew Nork City'
};



const getUserLocation = (location) => {
    return (location != null && location != '') ? <p>Location: {location}</p> : undefined;
}

const getUserName = (uName) => {
    return (uName    != null && location != '') ? <h1> Name: {uName}</h1>     : 'Anonymous';
}

const getFirstName = (fullName) => fullName.split(' ')[0];
const getLastName  = (fullName) => fullName.split(' ')[1];

const onFormSubmit = (event) => {
    event.preventDefault();

    // Holds whatever value was placed inside the element with the name 'option', which is the input field in this case.
    const option = event.target.elements.option.value;
    if (option && option != '') {
        app.options.push(option);
    }
    event.target.elements.option.value = '';
    render();
}
const clearItems = (event) => {
    event.preventDefault();
    app.options = [];
    render();
}
const removeOne = (index) => {
    app.options[index] = null;
    render();
}

const showDecision = (choice) => {
    const decisionModal = (
        <div>

            <div className="content">
                <div className="ui header answer"><h1 className="modal-head">{choice.toUpperCase()}</h1></div>
            </div>
            <div className="actions">
                <div className="ui positive right labeled icon button thanks">{responses[Math.floor(Math.random()*responses.length)]}</div>
            </div>
        </div>
    );

    ReactDOM.render(decisionModal, decision);
}


const makeDecision = () => {
    let maxInRange = app.options.length;
    let choice = Math.floor(Math.random()*maxInRange);
    choice = (choice < 0 || choice == undefined) ? 0 : choice;
    showDecision(app.options[choice]);
    $('.ui.modal').modal('show');
}

const render = () => {
    let keyNum = (app.options.length-1);
    const template = (
        <div>
            <div className="head-container">
                <h1 className="head" id="jsx-h1">{app.title} | </h1>{(app.subtitle) && <h3 className="head">{app.subtitle}</h3>}
            </div>

            <form onSubmit={onFormSubmit} className="ui form add-option">
                <label htmlFor="option" className="ui label">{app.options.length > 0 ? `You have ${app.options.length} option${(app.options.length > 1)?'s':''}:` : 'Enter an option:'}</label>
                <input type="text" name="option" className="ui input option" />
            </form>

            <div className="buttons-container">
                <button type="none" onClick={makeDecision} className="ui button make-decision">What Should I Do?</button>
                <div className="add-remove-container">
                    <button type="submit" className="ui blue button options-button">Add Option</button>
                    <button type="submit" onClick={clearItems} className="ui red button remove">Remove All</button>
                </div>
            </div>

                { app.options.length > 0 &&
                    <ul className="ui segments options-list">
                    {
                        app.options.map((opti, i) => (opti != null) &&
                            <li key={i} className="ui segment user-option">
                                {opti}
                                <button onClick={() => removeOne(i)} className="removeOne"> X </button>
                            </li>)
                    }
                    </ul>
                }

        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();