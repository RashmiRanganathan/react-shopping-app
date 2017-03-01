import React from 'react';
import { Link, IndexLink } from 'react-router';
import cartImg from '../../public/img/cart.png';
import Cart from './Cart.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  updateCart(productToAdd) {
    let newCart = this.state.cart;
    const index = newCart.indexOf(productToAdd);
    if (index === -1) {
      productToAdd.q = 1
      newCart.push(productToAdd)
    } else {
      newCart[index].q++;
    }
    this.setState({ cart: newCart })
  }
  removeItem(ProductToRemove) {
    let newCart = this.state.cart;
    const index = newCart.indexOf(ProductToRemove);
    newCart.splice(index, 1);
    this.setState({ cart: newCart })
  }
  handleCartClick() {
    document.getElementsByClassName('overflow-cart')[0].style.opacity = 1
  }
  f(){
    console.log('hi');
  }
  render() {
    return (
      <div>
        <div id="head">
          <h1 className="shop">ShopNow</h1>
          <div className="carousel">
            <ul className="header">
              <li><IndexLink to="/home" activeClassName="active">Home</IndexLink></li>
              
              <li><Link to="/electronics" params={this.state.cart} activeClassName="active">Electronics</Link></li>
              <li><Link to="/Appliances" activeClassName="active">Appliances</Link></li>
              <li><Link to="/men" activeClassName="active">Men</Link></li>
              <li><Link to="/women" activeClassName="active">Women</Link></li>
              <li><Link to="/furniture" activeClassName="active">Home & Furniture</Link></li>
              <li><Link to="/book" activeClassName="active">Books & More</Link></li>
            </ul>
          </div>
          <div className="cart" >
            <div onClick={this.handleCartClick}>
              <img src={cartImg} alt="çå®†" />
              <span className="item-in-cart">CART <span className="count" >{this.state.cart.length}</span></span>
            </div>
            <Cart cartContent={this.state.cart} remove={this.removeItem.bind(this)} />
          </div>
        </div>
        <div id="container">
          <div id="filter">
          </div>
          <div className="content">
            {
              React.cloneElement(
                this.props.children,
                {
                  cart: this.state.cart,
                  update: this.updateCart.bind(this)
                }
              )
            }
          </div>
        </div>
        <div className="footer">
          <p>Policies : Returns Policy | Terms of use | Security | Privacy | Infringement    © 2017-2017</p>
        </div>
      </div>
    );
  }
}
