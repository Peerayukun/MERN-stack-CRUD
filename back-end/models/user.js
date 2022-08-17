const mongoose = require('mongoose')

const dbURL = 'mongodb://localhost:27017/merntest'
mongoose.connect(dbURL,{
    useNewUrlParser:true,
    UseUnifiedTopology:true
}).catch(err=>console.log(err))

let userSchema = mongoose.Schema({
    email:String,
    name:String,
    roll:Number
})

//สร้างmodelที่มีโครงสร้างschemaตามuserSchema
let User = mongoose.model('user',userSchema)

module.exports = User

module.exports.saveUser = function(model,data){
    model.save(data)
}
