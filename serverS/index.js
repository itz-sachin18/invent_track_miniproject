const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const admins = require('./modules/employee');



const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/new')



app.post("/choice/S_login" ,(req,res)=>{
  const {email , pass} =req.body;
  admins.findOne({email :email})
  .then(user =>{
    if(user){
      if(user.pass === pass){
        res.json("success")
      }
      else{
        res.json("incorrect pass")
      }
    }
    else{
      res.json("invalid email")
    }
  })
  .catch(err => res.json(err))

})





app.post('/choice/S_regis',  (req, res) => {
  const data =req.body ;
  console.log(data)
  admins.create(data)
  .then(employee => res.json(employee))
  .catch(err => res.json(err))
  
});




app.listen(3001,() =>{
  console.log("server is running")
})