// importing all required dependency
const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/mongoose");

require('lightrun').start({
    lightrunSecret: 'e52447c2-7aab-4f8d-890d-07b717351a60',
    company: 'sarvesh',
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use routes
app.use("/", require("./routes"));

db();


// listening to port
app.listen(port, function (err) {
    if (err) {
        console.log("Error running server");
    }
    console.log(`server is up and running on port :: ${port}`);
})