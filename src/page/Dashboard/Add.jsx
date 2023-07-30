import React from "react";
import { useState,useRef,useEffect } from "react";
import Swal from "sweetalert";
function Add({ employees, setEmployees, setIsAdding }) {
    const [firstName, setFirstName] =useState('');
    const [lastName ,setLastName] =useState('');
    const[email, setEmail] =useState('');
    const [date ,setDate] =useState('');
    const [salary ,setSalary] =useState('');
    const textInput = useRef(null);
    useEffect(()=>{
textInput.current.focus();

    },[]);
    const handleAdd =(e) =>{
        e.preventDefault();
        if(!firstName || !lastName || !email || !salary || !date){
            return Swal({
            title: "Error",
            
            text: "All fields are required",
            icon: "error",
            confirmButtonText: "OK",
            
          });
    }
    const id= employees.length +1;
    const newEmployee={
        id ,
        firstName ,
        lastName ,
        email ,
        salary,
        date ,
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false)
    
    Swal({
        title: "Added !",
        text: `${firstName} ${lastName}"data has been added"`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500
        
      });

    }

    return (
      
        <div className="addempFormDiv">
            <h1>Add Employee</h1>
            <form onSubmit={handleAdd} className="addEmployeeForm">
                <label htmlFor="firstName"><b>First Name</b></label>
                <input type="text" name="firstName" id="firstName" ref={textInput} value={firstName}  onChange={(e)=>setFirstName(e.target.value)}  /><br />
                <label htmlFor="lastName"><b>Last Name</b></label>
                <input type="text" name="lastName" id="lastName" value={lastName}  onChange={(e) =>setLastName(e.target.value)}  /><br />
                <label htmlFor="email"><b>Email Id</b></label>
                <input type="email" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)}  /><br />
                <label htmlFor="salary"><b>Salary ($)</b></label>
                <input type="number" name="salary" id=" salary" value={salary} onChange={(e)=>setSalary(e.target.value)}  /><br />
                <lable htmlFor="date"><b>Date</b></lable>
                <input type="date" name="date" id="date" value={date} onChange={(e) =>setDate(e.target.value)} />
                <div className="formdiv">
                <button type="submit" name="submit" className="addEmpFrmBtn" ><b>Add</b></button>
                <button type="btn" name="cancel" className="cancelEmpFrmBtn" onClick={(e)=>setIsAdding(false)} ><b>Cancel</b></button>
                </div>
            </form>
        </div>
    )
}
export default Add;