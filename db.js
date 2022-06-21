const mysql=require('mysql');
 const pool=mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"",
    port:"3307",
    database:"employee"

});
let employee ={};
employee.all=()=>{
    return new Promise((resolve,reject)=>{
    pool.query('SELECT*FROM EMPLOYEE_DETAILS',(err,results)=>{
        if(err){
            return reject(err);
        }
        return resolve(results);
    });

});
}

employee.one=(emp_id)=>{
    return new Promise((resolve,reject)=>{
    pool.query('SELECT*FROM EMPLOYEE_DETAILS WHERE emp_id=?',[emp_id],(err,results)=>{
        if(err){
            return reject(err);
        }
        return resolve(results[0]);
    })
})
}
//delete an employee
employee.one=(emp_id)=>{
    return new Promise((resolve,reject)=>{
    pool.query('DELETE FROM  EMPLOYEE_DETAILS WHERE emp_id=?',[emp_id],(err,results)=>{
        if(err){
            return reject(err);
        }
        return resolve('deleted successfully');
    })
})
}
//update an employee

let data={}
    employee.values=()=>{
    return new Promise((resolve,reject)=>{
    pool.query ('INSERT INTO `employee_details`(`emp_id`, `emp_name`, `phone_num`) VALUES('[value-1],''[value-2],''[value-3],')' ,(err,results)=>{
        if(err){
            return reject(err);
        }
        return resolve('results');
    });
});
    }




module.exports=employee;
