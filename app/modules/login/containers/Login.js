import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Login from '../components/Login'

class Container extends Component {
  onRequestRouteChange(route){
    this.props.dispatch(push(route))
  }

  render () {
    return (
      <Login
        onRequestRouteChange={(route) => this.onRequestRouteChange(route)}
      />
    )
  }
}

export default connect((state) => {
  return {}
})(Container)
