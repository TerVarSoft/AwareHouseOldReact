export default class Product {
  _id: String;
  code: String;
  description: String;
  color: String;
  price: Number;
  quantity: Number;

  constructor(data) {
    this._id = data._id.id ? data._id.id : data._id;
    this.description = data.description;
    this.color = data.color;
    this.price = data.price;
    this.quantity = data.quantity;
  }
}
