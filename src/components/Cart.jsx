import React from 'react';

export default class Cart extends React.Component {
  handleCartClose() {
    document.getElementsByClassName('overflow-cart')[0].style.opacity = 0
  }
  remove() {
    const remove = this.props.remove
    remove(this.props.product)
  }
  render() {
    const cartContent = this.props.cartContent;
    const cartContentDom = cartContent.map((product, index) => {
      const requireImg = require('../../public/img/' + product.pic)
      return (<div className="item-in-cart" key={product.id}>
        <img src={requireImg} alt={product.pic} />
        <span className="remove-item" onClick={this.remove.bind(this)}>X</span>
        <p className="price-in-cart">&#8377; {product.price} </p>
        <p className="title-in-cart" >{product.name} </p>
        <p className="quantity-in-cart">Quantity : {product.q}</p> 
      </div>
      )
    })
    return (
      <div className="overflow-cart">
        <div className="head-in-cart" onClick={this.handleCartClose}>SHOPPING CART({cartContent.length}) <span>X</span></div>
        {cartContentDom}
      </div>
    );
  }
}