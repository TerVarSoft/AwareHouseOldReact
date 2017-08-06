import { app, BrowserWindow, ipcMain as ipc } from 'electron'

ipc.on('get-products', () => {
  let products = [
      {
        code: '1',
        description: 'My description 1',
        color: 'Green',
        price: 70,
        quantity: 30
      },
      {
        code: '2',
        description: 'My description 2',
        color: 'Rojo',
        price: 50,
        quantity: 20
      },
      {
        code: '3',
        description: 'My description 3',
        color: 'Azul',
        price: 80,
        quantity: 50
      },
      {
        code: '4',
        description: 'My description 1',
        color: 'Green',
        price: 70,
        quantity: 30
      },
      {
        code: '5',
        description: 'My description 2',
        color: 'Rojo',
        price: 50,
        quantity: 20
      },
      {
        code: '6',
        description: 'My description 3',
        color: 'Azul',
        price: 80,
        quantity: 50
      },
      {
        code: '7',
        description: 'My description 1',
        color: 'Green',
        price: 70,
        quantity: 30
      },
      {
        code: '8',
        description: 'My description 2',
        color: 'Rojo',
        price: 50,
        quantity: 20
      },
      {
        code: '9',
        description: 'My description 3',
        color: 'Azul',
        price: 80,
        quantity: 50
      },
    ]; 

  mainWindow.webContents.send('products', products);
  console.log("Workiiing!!!!!!!!! from products!");
});