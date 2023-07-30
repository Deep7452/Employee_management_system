import React, { useState } from "react";
import Header from "./Header";
import Add from "./Add";
import List from "./List";
import Edit from "../Edit";
import Swal from "sweetalert";
import EmployeeData from "../../data/EmployeData";
function Dashboard() {
    const [employees, setEmployees] = useState(EmployeeData);
    const [isAdding, setIsAdding] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

 const handleEdit = (id)=>{
    console.log(id)
    const [employee] = employees.filter(employee =>employee.id ===id);
    console.log(employee)
    setSelectedEmployee(employee);
    setIsEditing(true);
 }
 const handleDelete =(id) =>{
    Swal({
        title: "Delete",
        text: 'Data Deleted Succcesfully',
        icon: "warning",
        buttons: false,
        timer:1500,
        

 })
    setEmployees(prevEmployees =>prevEmployees.filter(employee =>employee.id !== id));
   
    
 }


// console.log(EmployeessData)

    return (
        <div className="container">
            {/* list */}
            {!isAdding && !isAdding && (
                <>
                    <Header 
                            setIsAdding={setIsAdding}    />
                    <List 
                    
                          employees={employees} 
                          handleEdit={handleEdit}     
                          handleDelete={handleDelete}
                                />
                </>
            )}
            {/* Add */}
            {isAdding &&(
                <Add 
                    employees ={employees}
                    setEmployees={setEmployees}
                    setIsAdding ={setIsAdding}
                
                
                        />
            )}
             {isEditing &&(
                <Edit
                    employees ={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                
                
                        />
            )}

        </div>
    )

}
export default Dashboard;
