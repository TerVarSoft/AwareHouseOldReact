import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ManageProduct = ({product, onClickSave, onProductCodeChange}) => {
  const mainDivStyle = {
    padding: 30,
  };

  return (
    <div style={mainDivStyle}>
      <Card>
        <CardHeader title="Detalles del Producto" />
        <CardText className="row center-xs">
          <div className="col-xs-8">
            <div className="row">
              <TextField floatingLabelText="Codigo" fullWidth={true}
                value={product.code} onChange={onProductCodeChange} />
            </div>
            <div className="row">
              <TextField floatingLabelText="Descripcion" fullWidth={true} />
            </div>
            <div className="row">
              <TextField floatingLabelText="Precio" fullWidth={true} />
            </div>
            <div className="row">
              <TextField floatingLabelText="Cantidad" fullWidth={true} />
            </div>
          </div>
        </CardText>
        <CardActions>
          <FlatButton label="Cancelar" />
          <FlatButton label="Guardar" onClick={onClickSave}/>
        </CardActions>
      </Card>
    </div>
  );
}

ManageProduct.propTypes = {
  product: PropTypes.object.isRequired,
  onProductCodeChange: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
}

export default ManageProduct;
