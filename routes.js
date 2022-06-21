const express=require('express');
const employee=require('./db');
const router=express.Router();
router.get('/', async (req,res,next)=>{
    try{
        let results=await employee.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    
});

router.get('/:emp_id', async (req,res,next)=>{
    try{
        let results=await employee.one(req.params.emp_id);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
router.delete('/:emp_id', async (req,res,next)=>{
    try{
        let results=await employee.one(req.params.emp_id);
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
router.post('/', async (req,res,next)=>{
    try{
        let results=await employee.values ();
        res.json(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports=router;