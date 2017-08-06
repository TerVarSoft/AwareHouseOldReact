import Application from './modules/core/containers/Application'
import { routes as home } from './modules/home'
import { routes as login } from './modules/login'
import { routes as products } from './modules/products'
import { routes as sellings } from './modules/sellings'

export default (store) => {
  return {
    component: Application,
    childRoutes: [
      home(store),
      login(store),
      products(store),
      sellings(store),
    ]
  }
}