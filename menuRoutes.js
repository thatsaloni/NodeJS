const express=require('express')
const router=express.Router()
const Menu=require('./../models/menu'); 

router.post('/', async (req,res) => {
    try{
        const itemData=req.body;
        const newItem=new Menu(itemData);
        const response=await newItem.save();
        console.log("Item saved!");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await Menu.find()
        console.log("Data Fetched!")
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
})

router.get('/:taste', async(req,res)=>{
    try{
        const taste=req.params.taste
        if(taste=='sweet'||taste=='spicy'||taste=='sour'){
            const response=await Menu.find({taste:taste})
            console.log("response fetched")
            res.status(200).json(response)
        }
        else{
            res.status(400).json({error:'Invalid taste!'})

        }
    }
    catch{
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

module.exports=router;