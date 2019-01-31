const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/products");
productSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 4 },
    price: { type: Number, required: true },
    imgurl: { type: String }
}, { timestamps: true });
products = mongoose.model("products", productSchema);
module.exports = products;