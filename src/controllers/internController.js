const collegeModel = require("../models/collegeModel");
const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");
const { isValid } = require("../validators/validation");

const createIntern = async (req, res) => {
  try{const { name, email, mobile, collegeName } = req.body;

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
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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

  const phonePattern = /^[6789]\d{9}$/;

  if (!phonePattern.test(mobile)) {
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
  const college = await collegeModel.findOne({ fullName: collegeName });

  if (!college) {
    res
      .status(404)
      .send({
        status: false,
        message: "with this Name college doesn't exists",
      });
  }

    const newIntern = await internModel.create({name, email, mobile, collegeId : college._id}).select({_id:0})

   return res.status(201).send({status : true, data : newIntern})

}catch(err){console.log(err), res.status(500).send({status : err.message})}
}


module.exports = {createIntern}