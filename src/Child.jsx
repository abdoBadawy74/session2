/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Child extends Component {

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

 
  render() {
    let { name, count, price, onSale, id } = this.props.productInfo;
    return (

      <div className="col-md-3 p-2 bg-dark text-white position-relative">
        <h6>productName: {name}</h6>
        <h6>count: {count}</h6>
        <h6>price: {price}</h6>
        {/* {onSale ? (
          <div className="bg-danger p-2 text-white position-absolute top-0 end-0">
            Sale
          </div>
        ) : (
          ""
        )} */}

        {onSale && (
          <div className="bg-danger p-2 text-white position-absolute top-0 end-0">
            Sale
          </div>
        )}
        <button
          className="btn btn-outline-danger w-100 my-2"
          onClick={() => this.props.delete(id)}
        >
          Delete
        </button>
        <button
          className="btn btn-outline-success w-100"
          onClick={() => this.props.update(this.props.index)}
        >
          Update
        </button>
      </div>
    );
  }
}
