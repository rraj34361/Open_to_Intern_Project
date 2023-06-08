const mongoose = require('mongoose')




const collegeSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true,
        unique : true,
        // example : "iith"
    },
    fullName : {
        type :String,
        required : true,
        unique : true,
        // example : "Indian Institute of Technology, Hyderabad"
    },
    logoLink : {
        type : String,
        required : true
    },

    isDeleted: {boolean, default: false}
     

})




module.exports = mongoose.model('College', collegeSchema)















//{ name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }