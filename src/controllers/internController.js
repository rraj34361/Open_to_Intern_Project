// const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internModel')
const {isValid} = require('../validators/validation')



const createIntern = (req,res)=>{
  const {name,email,mobile,collegeId} = req.body
  
  if(!isValid(name) || !isValid(email) || !isValid(mobile) || !isValid(collegeId)){
    return res.status(400).send({status : false , message : "Invalid input"})

  }


}