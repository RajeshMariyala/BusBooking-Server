const express = require("express");

const AdminsModel = require('../models/Adminmodel');

const router = express.Router();

router.get("/admin", async function (req, res) {

    let result = await AdminsModel.find({}, { "_id": 0 });
  
    try {
        console.log("No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
  
  });

  router.post("/admin", async function (req, res) {
    try {
  
      const username = req.body.username;
      const password = req.body.password;
  
      const existingUser = await AdminsModel.findOne({ username: username });
      if (existingUser && existingUser.password === password) {
        console.log("This user exists");
        return res.status(200).json({ message: "User already exists" });
      } else {
        return res.status(400).json({ message: "User does not exists" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Internal Server Error", message: error.message });
    }
  });

  module.exports = router;