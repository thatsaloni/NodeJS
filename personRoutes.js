const express=require('express')
const router=express.Router()
const Person=require('./../models/person'); 

router.post('/', async (req,res) => {
    try{
        const data=req.body;
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log("data saved!");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await Person.find()
        console.log("Data Fetched!")
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
})

router.get('/:workType', async(req,res)=>{
    try{
        const workType=req.params.workType
        if(workType=='chef'||workType=='waiter'||workType=='manager'){
            const response=await Person.find({work:workType})
            console.log("response fetched")
            res.status(200).json(response)
        }
        else{
            res.status(400).json({error:'Invalid work type!'})

        }
    }
    catch{
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

module.exports=router;

