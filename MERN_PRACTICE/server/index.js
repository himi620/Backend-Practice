const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/users");

const app = express();

app.use(cors());
app.use(express.json());

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://Himanshu:admin@cluster0.ys1qaxp.mongodb.net/MERN");
    console.log('DB connected');
  } catch (error) {
    console.error('Connection error', error);
  }
}
connectDB();



app.get('/getUsers',(req, res) => {
    userModel.find({}).then(function(users){
      res.json(users)
  })
  .catch(function(error){
   res.json(error)
  })
});

app.post("/createUser",async(req,res)=>{
  const user = req.body;
  const newUser = new userModel(user);
  await newUser.save();
  res.json(user);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
