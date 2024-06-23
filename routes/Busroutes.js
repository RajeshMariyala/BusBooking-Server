const express = require("express");

const BusModel = require('../models/Busmodel');

const router = express.Router();

router.get("/Buslist", async function (req, res) {

    let result = await BusModel.find({}, { "_id": 0 });

    try {
        console.log("No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }

});

router.post('/Buslist', async function (req, res) {
    var busObj = new BusModel({
        Busid: req.body.Busid,
        BusNo: req.body.BusNo,
        BusName: req.body.BusName,
       
    });

    let newObj = await busObj.save();

    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
});

router.put('/Buslist/:id', async function (req, res) {
    var busObj = {};
    busObj.Busid = req.body.Busid;
    busObj.BusNo = req.body.BusNo;
    busObj.BusName = req.body.BusName;
    

    let resResult = await BusModel.findOneAndUpdate({ Busid: busObj.Busid }, { $set: busObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);
});


router.delete('/Buslist/:id', async function (req, res) {
    var eno = parseInt(req.params.id);
    let resResult = await BusModel.findOneAndDelete({ Busid: eno });

    var result = {};
    result.status = "Record deleted from Database";
    console.log("[Delete] - Record deleted from Database");
    res.send(result);

});


module.exports = router;