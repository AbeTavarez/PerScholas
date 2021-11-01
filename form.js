console.log(`running script...`);


class App extends React.Component {
    state = {
        searchTerm : ''
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.searchTerm)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="searchTerm">Search</label>
                    <input type="text" onChange={this.handleChange} name="searchTerm"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)