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
    event.target.elements.option.value = '';
    console.log(app.options);

    render();
}
const render = () => {
    const template = (
        <div>
            <h1 className="head" id="jsx-h1">{app.title}</h1>
            <br />
            {(app.subtitle) && <span>{app.subtitle}</span>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no options.'}</p>
            { app.options.length > 0 &&
                <ol>
                    {app.options.length > 0 && <li> {app.options[0]}</li>}
                    {app.options.length > 1 && <li> {app.options[1]}</li>}
                    {app.options.length > 2 && <li> {app.options[2]}</li>}
                    {app.options.length > 3 && <li> {app.options[3]}</li>}
                </ol>
        }
            <form onSubmit={onFormSubmit}>
                <label htmlFor="option">Option:</label>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
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

const userInfo = (
    <div>
        {getUserName(user.fullName, 'first')}
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getUserLocation(user.location)}
    </div>
);

ReactDOM.render(userInfo, userRoot);
render();