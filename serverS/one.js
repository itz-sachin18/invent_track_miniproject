const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const heads = require('./modules/emp')


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/new')



app.post("/choice/R_login" ,(req,res)=>{
  const {email , pass} =req.body;
  heads.findOne({email :email})
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





app.post('/choice/R_regis',  (req, res) => {
  const data =req.body ;
  console.log(data)
  heads.create(data)
  .then(emp => res.json(emp))
  .catch(err => res.json(err))
  
});




app.listen(3000,() =>{
  console.log("server is running")
})