const mongoose = require("mongoose");
const db = () => {
    mongoose.connect("mongodb://localhost:27017/products", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB database with host :: ${con.connection.host}`)
    })
};

module.exports = db;