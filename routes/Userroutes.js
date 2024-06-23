const express = require("express");

const UserModel = require("../models/UserModel");

const router = express.Router();

router.get("/User", async function (req, res) {

    let result = await UserModel.find({}, { "_id": 0 });

    try {
        console.log("No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }

});

router.get("/User/:id", async function (req, res) {
    var eno = req.params.id;
    let result = await UserModel.findOne({ Refno: eno }, { "_id": 0 });
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);
});

router.post('/User', async function (req, res) {
    var userObj = new UserModel({
        Refno: req.body.Refno,
        Qty: req.body.Qty,
        Amount: req.body.Amount,
        Status: req.body.Status,
        Name:req.body.Name,
        Date:req.body.Date
       
    });

    let newObj = await userObj.save();

    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
});

router.put('/User', async function (req, res) {
    var userObj = {};
    userObj.Refno = parseInt(req.body.Refno);
    userObj.Qty = req.body.Qty;
    userObj.Amount = req.body.Amount;
    userObj.Status = req.body.Status;
    userObj.Name = req.body.Name;
    userObj.Date = req.body.Date;
    
    let resResult = await UserModel.findOneAndUpdate({ Refno: userObj.Refno }, { $set: userObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);
});

router.delete('/User/:id', async function (req, res) {
    var eno = parseInt(req.params.id);
    let resResult = await UserModel.findOneAndDelete({ Refno: eno });

    var result = {};
   
    console.log("[Delete] - Record deleted from Database");
});

module.exports = router;