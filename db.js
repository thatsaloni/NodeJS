const mongoose=require('mongoose');

//define mongodb connection url
const mongoURL='mongodb://localhost:27017/restaurant';

//set up mongodb coonection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


//get the default connection
//mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to server")
});

db.on('disconnected',()=>{
    console.log("disconnected from server")
});

db.on('error',()=>{
    console.log("Error occurred!")
})

module.exports=db;