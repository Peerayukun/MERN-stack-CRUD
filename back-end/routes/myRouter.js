const express = require('express')
const router = express.Router()

const User = require('../models/user')

//list user via api
router.get('/list',(req,res)=>{
    User.find().exec((err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

//delete data
router.get('/del/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
        if(err){console.log(err)}
        else{res.send('delete')}
    })
})

//update data
router.post('/update/:id',(req,res)=>{
    let newData = {
        email:req.body.email,
        name:req.body.name,
        roll:req.body.roll
    }
    User.updateOne({_id:req.params.id},{$set:newData}).exec(err=>{
        if(err){console.log(err)}
    })
})

//creats user
router.post('/create',(req,res)=>{
    let doc = new User({
        email:req.body.email,
        name:req.body.name,
        roll:req.body.roll
    })
    User.saveUser(doc,(err)=>{
        if(err) console.log(err)
        else{res.send('complete')}
    })
})

module.exports = router
