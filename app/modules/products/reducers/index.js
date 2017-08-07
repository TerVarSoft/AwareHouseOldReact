import * as TYPES from '../actions/actionTypes'

export default function (state = [], action) {
  console.log("staaate", state)
  switch(action.type) {
    case TYPES.PRODUCT_CREATE:
      return [
        ...state,
        Object.assign({}, action.product)
      ];
    case TYPES.LOAD_PRODUCTS_SUCCESS:
      return action.products;

    default:
      return state;
  }
}
