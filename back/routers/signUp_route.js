const express = require('express');
const route = express.Router();
const ClientModel = require ('../models/signUp');


route.get('/',(req,res)=>{
        res.send('welcome ');
})
route.post('/register',(req,res)=>{

ClientModel.registerClient(req.body.nom,req.body.prenom,req.body.email,req.body.naissance,req.body.tel,req.body.sexe,req.body.password)
.then((msg)=>res.send(msg))
.catch((err)=>{res.send(err)})

});

route.post('/login',(req,res)=>{
    ClientModel.loginClient(req.body.email,req.body.password)
    .then((msg)=>res.send(msg))
.catch((err)=>{res.send(err)})
})
module.exports=route