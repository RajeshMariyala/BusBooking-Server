const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require('./db'); 

const AdminRouter = require("./routes/Adminroutes");
const BookRouter = require("./routes/Bookroutes");
const BusListRouter = require("./routes/Buslistroutes");
const Busroutes = require("./routes/Busroutes");
const LoginRoutes = require("./routes/Loginroutes");
const UserRoutes = require("./routes/Userroutes");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", AdminRouter);
app.use("/api", BookRouter);
app.use("/api", BusListRouter);
app.use("/api", Busroutes);
app.use("/api", LoginRoutes);
app.use("/api", UserRoutes);

app.get("/", function (req, res) {
    res.send("Welcome to BusBooking API");
});


connectDB().then(() => {
    var server = app.listen(3005, function () {
        console.log("Server Started. URL: http://localhost:3005");
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});