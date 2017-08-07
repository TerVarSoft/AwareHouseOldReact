import Product from '../../models/product.model';

var productDao = require('../mongo/models/product.model');

export default class ProductDAO {

  find() {
    return productDao.find({}).then(products => {
      return products.map(product => new Product(product));
    });
  }

  save() {
    /*var superProduct = new Product({
                 code: '3',
                 description: 'My description 1',
                 color: 'Green',
                 price: 70,
                 quantity: 30
               });

    superProduct.save(function (err, test) {
     if (err) return console.error(err);
   });*/
  }
}
