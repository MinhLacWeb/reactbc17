import React, { Component } from "react";

export default class DataBinding extends Component {
  product = {
    id: 1,
    name: "Iphone",
    price: 1000,
    img: "https://i.pravatar.cc/200",
  };
  renderProduct = () => {
      //Nội dung trả về của hàm muốn binding phải được chứa trong 1 thẻ bao phủ là 1 string hoặc number
      return (
        <div className="card w-25">
        <img src={this.product.img} alt="" />
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
        </div>
      </div>
      )
  }

  render() {
    let title = "Cybersoft";
    return (
      <div className="container">
        <p id="txt">{title}</p>
        <hr />
        {this.renderProduct()}
      </div>
    );
  }
}
