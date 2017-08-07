import ProductDAO  from './../DAL/DAO/product.DAO';

export default class ProductService {
  productDAO: ProductDAO;

  constructor () {
    this.productDAO = new ProductDAO();
  }

  find() {
    return this.productDAO.find();
  }
}
