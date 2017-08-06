import React, { Component } from 'react'
import { ipcRenderer as ipc } from 'electron'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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

 ipc.on('products', function(event, products) {
      console.log("dataaa working!", products);
    });

export default class Products extends Component {

  constructor() {
    super();

    this.state = {products: []};
  }

  componentDidMount() {
    ipc.send('get-products');
    ipc.on('products', function(event, products) {
      console.log("dataaa working22222222222!", products);
      this.setState({products: products});
    }.bind(this));
  }

  componentWillUnmount() {
    ipc.removeAllListeners(['products']);
  }

  render () {
    const formStyle = {
      marginTop: '200px'
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

    let productsHtml = this.state.products.map(product => {
      return (<TableRow key={product.code}>
        <TableRowColumn>{product.code}</TableRowColumn>
        <TableRowColumn>{product.description}</TableRowColumn>
        <TableRowColumn>{product.color}</TableRowColumn>
        <TableRowColumn>{product.price}</TableRowColumn>
        <TableRowColumn>{product.quantity}</TableRowColumn>
      </TableRow>);
    });

    return (
      <div>
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

        <FloatingActionButton style={styleFloatingButton}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
      
    )
  }
}

Products.propTypes = {
  onRequestRouteChange: PropTypes.func.isRequired
}
