const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://keerthiram2612:keerthijaya@cluster26.mx7ja.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection  = mongoose.model("collection",newSchema)

module.exports = collection