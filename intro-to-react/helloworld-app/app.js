
console.log(`running script...`);

const message = 'Hello World';

//* need to remove the type="text/babel" 
// document.addEventListener('DOMContentLoaded', () => {
//     const div = document.getElementById('root');
//     div.innerHTML = `<h2>${message}</h2>`;
// });


ReactDOM.render(
    <h1>{message}</h1>,
    document.getElementById('root')
)

//* run python server
// python -m http.server <port number>