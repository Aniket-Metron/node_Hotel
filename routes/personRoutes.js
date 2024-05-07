const express = require('express');
const router = express.Router();
const Person=require('../models/Person');

router.post('/',async (req,res)=>{
    
    try {
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});

    }

});

router.get('/', async (req,res)=>{
    try{
        const data= await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});


    }
});

router.get('/:workType', async(req,res)=> {
    const workType = req.params.workType;
    try{
            if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
                const response = await Person.find({work : workType});
                console.log('response fetched');
                res.status(200).json(response);
            }
            else 
            {
                res.status(404).json({error: 'Invalid work type'});
            }

    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
            
        
    } 
});

router.put('/:id' , async (req,res)=>{
    try{
        const personId= req.params.id;
        const updatedPerson= req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedPerson, {
            new: true, // Return the updated documnet
            runValidators : true

        })
        if(!response){
            return res.status(404).json({error : "Person not found"});
        }
        console.log("data updated");
        res.status(200).json(response);

    }catch{
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});

    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const personId= req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error : "person not found"})
        }
        console.log("data deleted");
        res.status(200).json({megssage : "person deletd sucessfully"});

    }catch{
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});

    }
})

module.exports=router;