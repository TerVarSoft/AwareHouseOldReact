import Products from '../containers/Products'

export default (store) => {
  return {
    path: '/products',
    component: {
      content: Products
    }
  }
}
