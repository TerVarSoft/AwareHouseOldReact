import { app, BrowserWindow, ipcMain as ipc } from 'electron'
import ProductService  from './../services/product.service';

export default class ProductIpc {
  mainWindow: BrowserWindow

  productService: ProductService;

  constructor (mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
    this.productService = new ProductService();
  }

  init() {
    ipc.on('get-products', () => {

      let self = this;
      this.productService.find().then(function(products) {
        self.mainWindow.webContents.send('products', products);
      })
    });
  }
}
