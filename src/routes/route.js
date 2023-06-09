const express = require('express')
const router = express.Router()
const {createCollegeDoc} = require('../controllers/collegeController')
const {createIntern,getIntern} = require('../controllers/internController')



//for test
router.get('/', (req,res)=>{
    res.send("ok")
})

// create college profile
router.post('/functionup/colleges', createCollegeDoc )

// creaet intern 
router.post('/functionup/interns',createIntern )

router.get('/functionup/collegeDetails',getIntern )

module.exports = router