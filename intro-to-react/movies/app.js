console.log(`running script...`);


class App extends React.Component {
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apikey: 'apikey=' + '36e3873b',
        query: '&t=',
        searchURL: '',
        movie: '',
        movieTitle: '',
    }

    handleChange = e => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
        }, () => {
            fetch(this.state.searchURL)
            .then(res => {
                return res.json()
            })
            .then(json => this.setState({
                movie: json,
                movieTitle: ''
            }), err => console.log(err))
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="movieTitle">Movie Title</label>
                    <input 
                        type="text" 
                        value={this.state.movieTitle}
                        onChange={this.handleChange} 
                        id="movieTitle"
                        />
                    <input type="submit" value="Find Movie Info"/>
                </form>

                { this.state.movie && <MovieInfo movie={this.state.movie}/>}
            </div>
        )
    }
}

class MovieInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>Title:{this.props.movie.Title}</h1>
                <h2>Year: {this.props.movie.Year}</h2>
                <img src={this.props.movie.Poster}/>
                <h3>Genre: {this.props.movie.Genre}</h3>
                <h4>Plot: {this.props.movie.Plot}</h4>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)