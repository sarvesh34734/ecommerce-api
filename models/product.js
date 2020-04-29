const mongoose = require("mongoose");

// creating product schema
const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
});

//exporting productSchema as Produt
module.exports = mongoose.model("Product", productSchema);