/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Child extends Component {
  render() {
    console.log(this.props);

    let { name, price, count , onSale, id  } = this.props.productInfo;

    return (
      <div className="col-md-3 bg-light p-2 m-2 position-relative">
        {/* <h6>Name : {this.props.productInfo.name} </h6>
        <h6>price : {this.props.productInfo.price} </h6>
        <h6>count : {this.props.productInfo.count} </h6> */}


        <h6>Name : {name} </h6>
        <h6>price : {price} </h6>
        <h6>count : {count} </h6>
        {onSale ? <div className="bg-danger text-white p-2 position-absolute top-0 end-0 ">sale</div>:""}

        {/* <button onClick={this.props.delete } className="btn btn-outline-danger w-100">Delete</button> */}
        <button onClick={() => this.props.delete(id) } className="btn btn-outline-danger my-2 w-100">Delete</button>
        <button onClick={() => this.props.update(this.props.index) } className="btn btn-outline-success w-100">update</button>
        
      </div>
    );
  }
}


let person = {
    name: "Abdo",
    age: 30,
    address: "Cairo",
    };

    let { name, age, address } = person;