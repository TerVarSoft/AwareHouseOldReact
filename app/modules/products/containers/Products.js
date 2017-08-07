import React, { Component } from 'react'
import { ipcRenderer as ipc } from 'electron'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Products from '../components/Products'
import { loadProductsSuccess, createProduct } from '../actions'

class Container extends Component {
  constructor() {
    super();

    this.state = {products: [], product: {code:''}};

  }

  componentDidMount() {
    ipc.send('get-products');
    ipc.on('products', function(event, products) {
      console.log("dataaa workingFrom the container with redux!", products);
      this.props.loadProductsSuccess(products);
    }.bind(this));
  }

  componentWillUnmount() {
    ipc.removeAllListeners(['products']);
  }  

  onRequestRouteChange(route) {
    this.props.dispatch(push(route))
  }

  render () {
    return (
      <Products products={this.props.products}
        product={this.state.product}
        onClickSave={() => this.onClickSave()}
        onRequestRouteChange={(route) => this.onRequestRouteChange(route)}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProduct: product => dispatch(createProduct(product)),
    loadProductsSuccess: products => dispatch(loadProductsSuccess(products))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
