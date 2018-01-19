console.log('app.js is running.')

const appRoot   = document.getElementById('react-template-target');
const userRoot  = document.getElementById('user');
const cntrRoot  = document.getElementById('counter');

// JSX

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

console.log(`First Name: ${getFirstName(user.fullName)}, Last Name: ${getLastName(user.fullName)}`);


const onFormSubmit = (event) => {
    event.preventDefault();

    // Holds whatever value was placed inside the element with the name 'option', which is the input field in this case.
    const option = event.target.elements.option.value;
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

const render = () => {
    let keyNum = (app.options.length-1);
    const template = (
        <div>
            <h1 className="head" id="jsx-h1">{app.title}</h1>
            <br />
            {(app.subtitle) && <span>{app.subtitle}</span>}
            <p>{app.options.length > 0 ? `You have ${app.options.length} option${(app.options.length > 1)?'s':''}:` : 'There are no options.'}</p>
                { app.options.length > 0 &&
                    <ul className="ui segments">
                    {
                        app.options.map((opti, i) => (opti != null) &&
                            <li key={i} className="ui segment user-option">
                                {opti}
                                <button onClick={() => removeOne(i)} className="removeOne"> X </button>
                            </li>)
                    }
                    </ul>
                }
            <form onSubmit={onFormSubmit} className="ui form add-option">
                <label htmlFor="option" className="ui label">Option:</label>
                <input type="text" name="option" className="ui input option" />
                <button type="submit" className="ui blue button options-button">Add Option</button>
                <button type="submit" onClick={clearItems} className="ui red button options-button remove">Remove All</button>
            </form>

        </div>
    );

    ReactDOM.render(template, appRoot);
}

const userInfo = (
    <div>
        {getUserName(user.fullName, 'first')}
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getUserLocation(user.location)}
    </div>
);

ReactDOM.render(userInfo, userRoot);
render();