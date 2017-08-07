import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatButton } from 'material-ui'
import Text from './Text'
import * as colors from 'material-ui/styles/colors'

const styles = {
  root: {
    height: 75,
    backgroundColor: colors.blueGrey700,
    display: 'flex',
    alignItems: 'center',
    padding: '0 21px',
    zIndex: 10
  },
  title: {
    flex: '1 auto',
    color: colors.white
  },
  button: {
    color: colors.white,
    height: '100%'
  }
}

export default class Header extends Component {
  render () {
    const {
      onRequestRouteChange
    } = this.props

    return (
      <div style={styles.root}>
        <Text type="headline" style={styles.title}>
          Ferreteria Giss
        </Text>
        <FlatButton label="Inicio" onTouchTap={() => onRequestRouteChange('/')} style={styles.button} />
        <FlatButton label="Login" onTouchTap={() => onRequestRouteChange('/login')} style={styles.button} />
        <FlatButton label="Productos" onTouchTap={() => onRequestRouteChange('/products')} style={styles.button} />
        <FlatButton label="Nuevo" onTouchTap={() => onRequestRouteChange('/manageProduct')} style={styles.button} />
        <FlatButton label="Ventas" onTouchTap={() => onRequestRouteChange('/sellings')} style={styles.button} />
      </div>
    )
  }
}

Header.propTypes = {
  onRequestRouteChange: PropTypes.func.isRequired
}
