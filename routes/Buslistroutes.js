const express = require("express");

const BusListModel = require('../models/Buslistmodel');

const router = express.Router();

router.get('/buses', async (req, res) => {
    try {
      const buses = await BusListModel.find( );
      res.json(buses);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.get("/buses/:sno", async function (req, res) {
    var no = parseInt(req.params.sno);
    let result = await BusListModel.findOne({ sno: no }, { "_id": 0 });
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);
});

router.post('/buses', async function (req, res) {
  var buslistObj = new BusListModel({
      sno:parseInt(req.body.sno),
      name: req.body.name,
      from: req.body.from,
      to: req.body.to,
      type:req.body.type,
      ac:req.body.ac,
      sleeper:req.body.sleeper,
      End:req.body.End,
      Start:req.body.Start,
      Price:req.body.Price,
  });

  let newObj = await buslistObj.save();

  var result = {};
  result.status = "Record inserted in Database";
  console.log("[Create] - Record inserted in Database");
  res.send(result);
});

router.put('/buses',  async function (req,res)
{ 
        var busObj  = {};
        
        busObj.sno = parseInt(req.body.sno);
        busObj.name =  req.body.name;
        busObj.from =  req.body.from; 
        busObj.to = req.body.to;
        busObj.type = req.body.type;
        busObj.Start = req.body.Start;
        busObj.End = req.body.End;
        busObj.Price = req.body.Price;

        let resResult  = await  BusListModel.findOneAndUpdate(  {sno:busObj.sno},   {  $set : busObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});

router.delete('/buses/:sno', async function (req, res) {
  var eno = parseInt(req.params.sno);
  let resResult = await BusListModel.findOneAndDelete({ sno: eno });

  var result = {};
  result.status = "Record deleted from Database";
  console.log("[Delete] - Record deleted from Database");
  res.send(result);

});

module.exports = router;