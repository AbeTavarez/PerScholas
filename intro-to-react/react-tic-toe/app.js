class Player extends React.Component {
    render() {
        return (
            <div>
                <h2>Player </h2>
                <h3>Wins: </h3>
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return(
            <h1>React Tic Tac Toe!</h1>
        )
    }
}


class App extends React.Component {
    render() {
        return (
           <div>
               <Header />
                <Player />
                <Player />
           </div>
        )
    }
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
)