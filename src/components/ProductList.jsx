import React from 'react';
import productDetails from '../productDetails.js';
import Product from './Product.jsx';

export default class ProductList extends React.Component {
  render() {
    const allElectronics = productDetails[this.props.carousel];
    const allElectronicsDom = allElectronics.map((product, index) => {
      return <Product key={index} product={product} cart={this.props.cart} update={this.props.update}/>
    })
    const size = allElectronics.length
    return (
      <div>
        <h2> Electronics </h2>
        <p className="showing"> > ( Showing 1 – {size} products of {size} products ) </p>
        {allElectronicsDom}
      </div>
    );
  }
}