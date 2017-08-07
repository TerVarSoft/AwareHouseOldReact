import React, { Component } from 'react'
import { ipcRenderer as ipc } from 'electron'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Products extends Component {

  constructor() {
    super();

    this.state = {products: [], product: {code:''}};

    //this.onCodeChange = this.onCodeChange.bind(this);
    //this.onClickSave = this.onClickSave.bind(this);
  }

  render () {
    const mainDivStyle = {
      padding: 30,
    };

    const styleFloatingButton = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };

    const {
      onRequestRouteChange
    } = this.props

    let productsHtml = this.props.products.map(product => {
      return (<TableRow key={product._id}>
        <TableRowColumn>{product.code}</TableRowColumn>
        <TableRowColumn>{product.description}</TableRowColumn>
        <TableRowColumn>{product.color}</TableRowColumn>
        <TableRowColumn>{product.price}</TableRowColumn>
        <TableRowColumn>{product.quantity}</TableRowColumn>
      </TableRow>);
    });

    return (
      <div style={mainDivStyle}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Codigo</TableHeaderColumn>
              <TableHeaderColumn>Descripcion</TableHeaderColumn>
              <TableHeaderColumn>Color</TableHeaderColumn>
              <TableHeaderColumn>Precio [Bs]</TableHeaderColumn>
              <TableHeaderColumn>Cantidad</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsHtml}
          </TableBody>
        </Table>

        <Link to="/manageProduct" style={styleFloatingButton}>
          <FloatingActionButton >
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>

    )
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  onRequestRouteChange: PropTypes.func.isRequired
}
