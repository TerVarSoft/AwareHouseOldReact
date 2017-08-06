import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Products from '../components/Products'

class Container extends Component {
  onRequestRouteChange(route){
    this.props.dispatch(push(route))
  }

  render () {
    return (
      <Products
        onRequestRouteChange={(route) => this.onRequestRouteChange(route)}
      />
    )
  }
}

export default connect((state) => {
  return {}
})(Container)
