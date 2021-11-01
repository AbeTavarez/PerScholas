console.log(`running script...`);


class App extends React.Component {
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apikey: 'apikey=' + '',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.movieTitle)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="searchTerm">Search</label>
                    <input type="text" onChange={this.handleChange} name="movieTitle"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)