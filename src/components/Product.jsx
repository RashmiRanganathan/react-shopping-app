import React from 'react';

export default class Product extends React.Component {
  updateCartDetails() {
    const updateFunction = this.props.update
    updateFunction(this.props.product)
  }

  render() {
    const productObject = this.props.product
    let featuresDom = productObject.features.map((feature, index) => {
      return <li key={index}>{feature}</li>
    })
    const requireImg = require('../../public/img/' + productObject.pic)
    return (
      <div className="product-preview">
        <img src={requireImg} alt={productObject.pic} />
        <p className="price">&#8377; {productObject.price} </p>
        <div className="other-details">
          <p className="title" >{productObject.name} </p>
          <p className="rating">{productObject.rating} ★</p>
          <ul>
            {featuresDom}
          </ul>
          <div className="buy-product">
            <button className="add-to-cart" onClick={this.updateCartDetails.bind(this)}>ADD TO CART</button>
            <button className="buy">BUY NOW</button>
          </div>
        </div>
      </div>
    );
  }
}