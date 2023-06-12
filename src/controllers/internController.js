const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");
const { isValid } = require("../validators/validation");
const validator = require('validator')
const createIntern = async (req, res) => {
  try{let { name, email, mobile, collegeName } = req.body;

  if (
    !isValid(name) ||
    !isValid(email) ||
    !isValid(mobile) ||
    !isValid(collegeName)
  ) {
    return res.status(400).send({ status: false, message: "Invalid input" });
  }

  email = email.toLowerCase();
  // Email validation
  
  if (!validator.email(email)) {
    return res
      .status(400)
      .send({ status: false, message: "Email should be valid email address" });
  }
  //unique email check
  const intern = await internModel.findOne({ email });

  if (intern) {
    return res
      .status(400)
      .send({ status: false, message: "email already exists" });
  }

  // validating number
  mobile = mobile.trim();


  if (!validator.isMobilePhone(mobile)) {
    return res
      .status(400)
      .send({ status: false, message: "plz give a correct number" });
  }
  // unique number check
  const internExists = await internModel.findOne({ mobile });

  if (internExists) {
    return res
      .status(400)
      .send({
        status: false,
        message: "mobile no. already registered plz give another no.",
      });
  }
  collegeName = collegeName.trim();
  const college = await collegeModel.findOne({ name: collegeName });

  if (!college) {
 return   res
      .status(404)
      .send({
        status: false,
        message: "with this Name college doesn't exists",
      });
  }

    const newIntern = await internModel.create({name, email, mobile, collegeId : college._id}) 

    const sendInter = await internModel.findById(newIntern._id).select({_id:0,__v:0})

   return res.status(201).send({status : true, data : sendInter})

}catch(err){console.log(err), res.status(500).send({status :false , message: err.message})}
}

const getIntern = async (req,res)=>{
try{const query = req.query.collegeName.toLowerCase()


const college = await collegeModel.findOne({name : query}).lean()

const intern = await internModel.find({collegeId:college._id}).select({collegeId:0, isDeleted:0,__v:0})
delete college._id
delete college.isDeleted
delete college.__v
college.interns = intern

res.status(200).send({status:true, data :college})
}catch(err){
  console.log(err) , res.status(500).send({status:false, message:err.message})
}
}


module.exports = {createIntern,getIntern}