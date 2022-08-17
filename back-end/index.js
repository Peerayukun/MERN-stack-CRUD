const express = require('express')
const app = express()
const router = require('./routes/myRouter')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.urlencoded({extended:false}))
app.use(router)

app.listen(8080,()=>{
    console.log('server start')
})
