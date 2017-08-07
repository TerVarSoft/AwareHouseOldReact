import Products from '../containers/Products'
import ManageProduct from '../containers/manageProduct.container'

export default (store) => {
  return [{
    path: '/products',
    component: {
      content: Products
    }
  },{
    path: '/manageProduct',
    component: {
      content: ManageProduct
    }
  },{
    path: '/manageProduct/:id',
    component: {
      content: ManageProduct
    }
  }];
}
