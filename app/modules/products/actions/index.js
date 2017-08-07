import * as TYPES from './actionTypes'

export function createProduct (product) {
  return {type: TYPES.PRODUCT_CREATE, product}
}

export function loadProductsSuccess (products) {
  return {type: TYPES.LOAD_PRODUCTS_SUCCESS, products}
}
