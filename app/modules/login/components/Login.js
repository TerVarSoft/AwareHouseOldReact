import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
  render () {
    const formStyle = {
      marginTop: '100px'
    };

    const {
      onRequestRouteChange
    } = this.props

    return (
      <div className="row center-xs">
        <div className="col-xs-6 col-lg-4" style={formStyle}>
            <div className="row">
              <h1>Login</h1>
            </div>
            
            <div className="row">
              <TextField hintText="Usuario" 
                floatingLabelText="Usuario" fullWidth={true}/>
            </div>

            <div className="row">
              <TextField hintText="Password" type="password" 
                floatingLabelText="Password" fullWidth={true}/>
            </div>

            <div className="row end-xs">
              <RaisedButton label="Iniciar" />
            </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  onRequestRouteChange: PropTypes.func.isRequired
}
