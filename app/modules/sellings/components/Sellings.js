import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Sellings extends Component {
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

    let products = [
      {
        code: '1',
        description: 'My description 1',
        color: 'Green',
        price: 70,
        quantity: 30
      },
      {
        code: '2',
        description: 'My description 2',
        color: 'Rojo',
        price: 50,
        quantity: 20
      },
      {
        code: '3',
        description: 'My description 3',
        color: 'Azul',
        price: 80,
        quantity: 50
      },
      {
        code: '4',
        description: 'My description 1',
        color: 'Green',
        price: 70,
        quantity: 30
      },
      {
        code: '5',
        description: 'My description 2',
        color: 'Rojo',
        price: 50,
        quantity: 20
      },
      {
        code: '6',
        description: 'My description 3',
        color: 'Azul',
        price: 80,
        quantity: 50
      },
      {
        code: '7',
        description: 'My description 1',
        color: 'Green',
        price: 70,
        quantity: 30
      },
      {
        code: '8',
        description: 'My description 2',
        color: 'Rojo',
        price: 50,
        quantity: 20
      },
      {
        code: '9',
        description: 'My description 3',
        color: 'Azul',
        price: 80,
        quantity: 50
      },
    ]
    
    const dataSource1 = products.map(product => {
      let productIdentifier = product.code + " - " + product.description;
      return {
        text: productIdentifier,
        value: (
          <MenuItem
            primaryText={productIdentifier}
            secondaryText="&#9786;"
          />
        ),
      }
    });

    let productsHtml = products.map(product => {
      return (<TableRow key={product.code}>
        <TableRowColumn>{product.code}</TableRowColumn>
        <TableRowColumn>{product.description}</TableRowColumn>
        <TableRowColumn>{product.color}</TableRowColumn>
        <TableRowColumn>{product.price}</TableRowColumn>
        <TableRowColumn>{product.quantity}</TableRowColumn>
      </TableRow>);
    });

    return (
      <div className="row center-xs">
        <AutoComplete
          hintText="Busque un producto!"
          filter={AutoComplete.noFilter}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={dataSource1}
        />
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

Sellings.propTypes = {
  onRequestRouteChange: PropTypes.func.isRequired
}
