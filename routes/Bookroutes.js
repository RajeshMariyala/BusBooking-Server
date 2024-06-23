const express = require("express");

const BookModel = require('../models/Bookmodel');

const router = express.Router();

router.get("/Book", async function (req, res) {

    let result = await BookModel.find({}, { "_id": 0 });

    try {
        console.log("No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }

});

router.get("/Book/:id", async function (req, res) {
    var eno = req.params.id;
    let result = await BookModel.findOne({ Busid: eno }, { "_id": 0 });
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);
});

router.post('/Book', async function (req, res) {
    var busObj = new BookModel({
        Busid: req.body.Busid,
        Availability: req.body.Availability,
        Bus: req.body.Bus,
        Date: req.body.Date,
        Departure: req.body.Departure,
        ETA: req.body.ETA,
        Location: req.body.Location,
        Price: req.body.Price
    });

    let newObj = await busObj.save();

    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
});

router.put('/Book/:id', async function (req, res) {
    var busObj = {};
    busObj.Busid = req.params.id; 
    busObj.Availability = req.body.Availability;
    busObj.Bus = req.body.Bus;
    busObj.Date = req.body.Date;
    busObj.Departure = req.body.Departure;
    busObj.ETA = req.body.ETA;
    busObj.Location = req.body.Location;
    busObj.Price = req.body.Price;

    let resResult = await BookModel.findOneAndUpdate({ Busid: busObj.Busid }, { $set: busObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);
});


router.delete('/Book/:id', async function (req, res) {
    var eno = parseInt(req.params.id);
    let resResult = await BookModel.findOneAndDelete({ Busid: eno });

    var result = {};
    result.status = "Record deleted from Database";
    console.log("[Delete] - Record deleted from Database");
    res.send(result);

});





module.exports = router;
