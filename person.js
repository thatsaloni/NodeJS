const mongoose=require('mongoose');

//define person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        index: true,
        sparse: true,
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        require:true
    }
});

//defined person model through which we'll perform CRUD operations
const Person=mongoose.model('person',personSchema);

//export Person model
module.exports=Person;