const express = require("express");

const LoginModel = require('../models/Loginmodel');

const router = express.Router();

router.get("/Login", async function (req, res) {

  let result = await LoginModel.find({}, { "_id": 0 });

  try {
    console.log("No. of  items get from database : " + result.length);
    res.send(result);
  }
  catch (error) {
    res.status(500).send(error);
  }

});

router.post("/Login", async function (req, res) {
  try {

    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await LoginModel.findOne({ username: username });
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

router.post('/Register',  async  function (req,res)
{ 
        var userObj  = new  LoginModel({ 
                email : req.body.email,	
                username  :  req.body.username,
                password   : req.body.password,
              });

        let newObj  =  await  userObj.save(); 
		
		var result = {};
		result.status  = "Register Successfull!!";
		
		res.send(result);           
});
module.exports = router;