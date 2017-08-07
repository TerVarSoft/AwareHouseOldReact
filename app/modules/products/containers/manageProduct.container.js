import React, { Component } from 'react'
import { connect } from 'react-redux'

import ManageProduct from '../components/manageProduct.component';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      product: {
        code:'',
        description: '',
        price: '',
        quantity: '',
      }};
  }

  onProductCodeChange(event) {
    console.log("heyy");
    const product = this.state.product;
    product.code = event.target.value;
    this.setState({product: product});
  }

  onClickSave() {
    this.props.createProduct(this.state.product);
    alert(`Saving from container ${this.state.product.code}`);
  }

  render() {
    return (<ManageProduct
      product={this.state.product}
      onProductCodeChange={(event) => this.onProductCodeChange(event)}
      onClickSave={() => this.onClickSave()}
      ></ManageProduct>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProduct: product => dispatch(createProduct(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
