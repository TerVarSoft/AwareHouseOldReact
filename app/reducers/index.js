// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as core } from '../modules/core'
import { reducer as products } from '../modules/products'

const reducers = combineReducers({
  core,
  products,
  routing
})

export default reducers
