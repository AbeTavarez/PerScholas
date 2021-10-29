console.log(`running script...`);
console.table(products)

class App extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         products: products
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }


    state = {
        products,
        value: '',
        name: '',
        price: null,
        description: ''
    }

    handleChange = this.handleChange.bind(this)


    handleChange(e) {
        console.log(e.target.value);
        // console.log(this);
        // this.setState({value: e.target.value}) // updating a single input
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(`default prevented`);
        // create a new item object
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }
        //set state and clear form
        this.setState({
            products: [newItem, ...this.state.products],
            name: '',
            price: null,
            description: ''
        })
    }
    
    render() {
        console.log(this);
       return(
        <div>
        <h1>My Store!</h1>

        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Product Name </label>
            <input type="text" value={this.state.value} onChange={this.handleChange} id="name"/>
            <br/>
            <label htmlFor="price"> Price: </label>
            <input type="number" value={this.state.price} onChange={this.handleChange} id ="price"/>
            <br/>
            <label htmlFor="description"> Description: </label>
            <input type="textarea" value={this.state.description} onChange={this.handleChange} id="description"/>
            <br />
            <input type="submit"/>
        </form>

        <div>
            <h2>Preview our new item</h2>
            <h3>{this.state.name}</h3>
            <h4>{this.state.price}</h4>
            <h5>{this.state.description}</h5>
        </div>

        <h2>New Product</h2>
        <div>{this.state.products[0].title}</div>

        <ul>
            {this.state.products.map((item, index) => (
                <div>
                    <li key={index}>{item.title}</li>
                    <li key={index}>{item.price}</li>
                </div>
            ))}
        </ul>
    </div>
       )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)