import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    // product: {
    //   id: 1, name: "Toshiba Laptop", price: 9000, count: 10, onSale: true,
    // },

    products: [
      { id: 1, name: "Toshiba Laptop", price: 9000, count: 10, onSale: true },
      { id: 2, name: "Samsung Laptop", price: 7000, count: 6, onSale: false },
      { id: 3, name: "HP Laptop", price: 12000, count: 9, onSale: false },
      { id: 4, name: "Dell Laptop", price: 6000, count: 33, onSale: true },
      { id: 5, name: "Mac Laptop", price: 15000, count: 4, onSale: true },
    ],
  };

  deleteProduct = (id) => {
    // // deep copy
    // let newProducts = [...this.state.products];

    // // action
    // newProducts = newProducts.filter(product => product.id !== id);

    // // update state | Set State
    // this.setState({
    //     products: newProducts
    // })

    // deep copy
    let products = [...this.state.products];

    // action
    products = products.filter((product) => product.id !== id);

    // update state | Set State
    this.setState({
      products,
    });
  };


    updateProduct = (index) => {
        // deep copy
        let products = [...this.state.products];

        // action
        products[index].count = products[index].count + 1;

        // update state | Set State
        this.setState({
            products,
        });
    }

  render() {
    return (
      <div className="bg-dark p-2">
        <h1 className="text-white">Parent Component</h1>
        {/* <Child productInfo={this.state.productName} /> */}
        {/* <Child userName={"Abdo"} productInfo={this.state.productName} /> */}
        {/* <Child productInfo={this.state.product} />  */}

        {/* <Child productInfo={this.state.products[0]} /> 
        <Child productInfo={this.state.products[1]} /> 
        <Child productInfo={this.state.products[2]} />  */}
        <div className="d-flex flex-wrap justify-content-center">
          {
            // this.state.products.map((product) => <Child productInfo={product}  />)
            this.state.products.map((product, i) => (
              <Child
                productInfo={product}
                key={i}
                index={i}
                update={this.updateProduct}
                delete={this.deleteProduct}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
