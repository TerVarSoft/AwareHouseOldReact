import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Sellings from '../components/Sellings'

class Container extends Component {
  onRequestRouteChange(route){
    this.props.dispatch(push(route))
  }

  render () {
    return (
      <Sellings
        onRequestRouteChange={(route) => this.onRequestRouteChange(route)}
      />
    )
  }
}

export default connect((state) => {
  return {}
})(Container)
