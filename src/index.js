const express = require('express');
const bodyParser = require ('body-parser');
const route =  require("./routes/route");

const {default : mongoose}  = require('mongoose');
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://rraj34361:bXgwmkpBz9CHdAfr@cluster0.brjrlou.mongodb.net/College-Intern", {
useNewUrlParser: true 
}).then(()=> {
    console.log("MongoDB is Connected");

}).catch((err) => {
console.log(err);
})
app.use('/',route)


app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running on port ${process.env.PORT||3000}`)
})


