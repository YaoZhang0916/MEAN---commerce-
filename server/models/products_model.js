var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength:3},
  qty: {type: Number, required: true, min:0},
  price: {type: Number, required: true}
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
