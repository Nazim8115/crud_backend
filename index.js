const express = require("express");
const app = express();
const port = 8000;


const userRouter = require("./routes/user");
const {connectMongoDb} = require('./connection');
const{logReqRes} = require('./middlewares')


// connection 
connectMongoDb('mongodb://127.0.0.1:27017/app_1').then(()=>{console.log("mongodb connected!")})


// Middlewaere -  Plugin-----------------------------
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));


// routes 
app.use("/api/users",userRouter);
app.listen(port, (req, res) => {
  console.log(`server sterted at port no : ${port}`);
});
