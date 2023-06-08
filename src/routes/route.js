const express = require('express')
const router = express.Router()
const {createCollegeDoc} = require('../controllers/collegeController')
router.get('/', (req,res)=>{
    res.send("ok")
})

router.post('/ /functionup/colleges', createCollegeDoc )





module.exports = router