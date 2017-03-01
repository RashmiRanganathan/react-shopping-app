import React from 'react';
import ProductList from './ProductList.jsx';

export default class Electronics extends React.Component {
  render() {
    const category = 0
    let items = <ProductList carousel={category} cart={this.props.cart} update={this.props.update} />
    return (
      <div>
        {items}
      </div>
    );
  }
}