console.log(`running script...`);
console.table(products)

class App extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         products: products
    //     }
    // }

    state = {
        products
    }
    render() {
       return(
        <div>
        <h1>My Store!</h1>

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