const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup",async (req,res) =>{
   //creating a new instance of the user model
const user = new User({
    firstName: "vina",
    lastName: "Mohite",
    emailId: "ravia@gmail.com",
    password: "vina"
});

try{
  await user.save();
  res.send("user added successfully..!")
}catch(err){
  res.status(500).send("error saving the user:" +err.message);
}

});




connectDB()
  .then( () =>{
    console.log("database connection established...!");
    app.listen(3000, () =>{
        console.log("Server is suucessfully listening on port 3000");
    });
   }).catch( err =>{
    console.error("database connection cannot be established...!");
   })



