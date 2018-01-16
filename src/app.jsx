console.log('app.js is running.')

// JSX

let app = {
    title:    'Indecision',
    subtitle: 'Make tricky decisions with the help of ReactJS!',
    options: ['One thing', 'two thing', 'red thing', 'blue thing']
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


const template = (
    <div>
        <h1 className="head" id="jsx-h1">{app.title}</h1>
        <br />
        {(app.subtitle) && <span>{app.subtitle}</span>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no options.'}</p>
    </div>
);
let count = 0;
const addOne = () => {
    count++;
    render2();
}
const subOne = () => {
    count--;
    render2();
}
const resetCount = () => {
    count=0;
    render2();
}



const userInfo = (
    <div>
        {getUserName(user.fullName, 'first')}
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getUserLocation(user.location)}
    </div>
);

const appRoot   = document.getElementById('react-template-target');
const userRoot  = document.getElementById('user');
const cntrRoot  = document.getElementById('counter');

const render2 = () => {
    const templateTwo = (
        <div>
            <h2>Count:&nbsp;{count}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            &nbsp; &nbsp;
            <button onClick={resetCount}>CE</button>

        </div>
    );
    ReactDOM.render(templateTwo, cntrRoot);
}

ReactDOM.render(template, appRoot);
ReactDOM.render(userInfo, userRoot);
render2();