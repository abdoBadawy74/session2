import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    products: [
      { id: 1, name: "Toshiba Laptop", price: 9000, count: 10, onSale: true },
      { id: 2, name: "Samsung Laptop", price: 7000, count: 6, onSale: false },
      { id: 3, name: "HP Laptop", price: 12000, count: 9, onSale: false },
      { id: 4, name: "Dell Laptop", price: 6000, count: 33, onSale: true },
      { id: 5, name: "Mac Laptop", price: 15000, count: 4, onSale: true },
      { id: 6, name: "Toshiba Laptop", price: 9000, count: 10, onSale: true },
      { id: 7, name: "Samsung Laptop", price: 7000, count: 6, onSale: false },
      { id: 8, name: "HP Laptop", price: 12000, count: 9, onSale: false },
      { id: 9, name: "Dell Laptop", price: 6000, count: 33, onSale: true },
      { id: 10, name: "Mac Laptop", price: 15000, count: 4, onSale: true },
      { id: 11, name: "Toshiba Laptop", price: 9000, count: 10, onSale: true },
      { id: 12, name: "Samsung Laptop", price: 7000, count: 6, onSale: false },
      { id: 13, name: "HP Laptop", price: 12000, count: 9, onSale: false },
      { id: 14, name: "Dell Laptop", price: 6000, count: 33, onSale: true },
      { id: 15, name: "Mac Laptop", price: 15000, count: 4, onSale: true },
      { id: 16, name: "Toshiba Laptop", price: 9000, count: 10, onSale: true },
      { id: 2, name: "Samsung Laptop", price: 7000, count: 6, onSale: false },
      { id: 3, name: "HP Laptop", price: 12000, count: 9, onSale: false },
      { id: 4, name: "Dell Laptop", price: 6000, count: 33, onSale: true },
      { id: 5, name: "Mac Laptop", price: 15000, count: 4, onSale: true },
    ],
  };

  // deep copy
  // Action
  // SetState();

  deleteProduct = (id) => {
    // // deep copy
    // let newProducts = [...this.state.products];

    // //action
    // newProducts = newProducts.filter((product) => product.id !== id);
    // // SetState
    // this.setState({
    //   products: newProducts,
    // });

    let products = [...this.state.products];
    products = products.filter((product) => product.id !== id);
    this.setState({
      products,
    });
  };


  updateProduct = (index) => {
    // deep copy
    let products = [...this.state.products];
    // action
    products[index].count = products[index].count - 1;

    // setState
    this.setState({
      products,
    });

  }

  componentDidUpdate() {
    console.log("parent Component Did Update");
  }

  render() {
    // console.log("render");
    return (
      <div className="d-flex gap-2 flex-wrap justify-content-center">
        {this.state.products.map((product, index) => (
          <Child
            productInfo={product}
            key={index}
            index={index}
            delete={this.deleteProduct}
            update={this.updateProduct}
          />
        ))}
      </div>
    );
  }
}
