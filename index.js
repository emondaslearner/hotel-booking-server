const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./connection')

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/search',async(req,res) => {
    try{
        const data = await connection.searchModel(req.body)
        const response = data.save()
        res.send(response)
    }catch(err){
        res.send(err)
    }
})

app.post('/users',async(req,res) => {
    try{
        const user = connection.userModel(req.body)
        const userResponse =await user.save()
        res.send(userResponse)
    }catch(err){
        res.send(err)
    }
})
app.post('/login',async(req,res) => {
    try{
        const information = await connection.userModel.findOne({name:req.body.name})
        if(information.password == req.body.password){
            res.send(information)
        }
    }catch(err){
        res.send(err)
    }
})

app.listen(4000)