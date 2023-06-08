const collegeModel = require('../models/collegeModel')
const {isValid} = require('../validators/validation')



const createCollegeDoc = (req,res)=>{

  const  {name, fullName, logoLink} = req.body

   
  if(!isValid(name) || !isValid(fullName) || !isValid(logoLink) ){
   return res.status(400).send({status : false , message : "Invalid input"})
  }

        const collegeName = collegeModel.findOne({name})

        if(collegeName)  {
            return res.status(400).send({status : false , message : "college abbriviation already exists"})
        }

        const collegeFullName = collegeModel.findOne({fullName})

        
        if(collegeFullName)  {
            return res.status(400).send({status : false , message : "college Name already exists"})
        }


         const college = collegeModel.create(req.body)


         return res.status(201).send({status :true , data : college})
           
}



module.exports = {createCollegeDoc}