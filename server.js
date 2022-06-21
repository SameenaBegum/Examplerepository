const express=require('express');
const router=require('./routes');
const employee=require('./db');
const app=express();
app.use(express.json());
app.use('/results',router);
//  app.use('/results',employee);

app.listen(process.env.PORT || '3000',()=>{
    console.log('server is running on port:${process.env.PORT ||3000}');
})