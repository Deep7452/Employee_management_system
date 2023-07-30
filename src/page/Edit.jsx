import React, { useState } from "react";
import Swal from "sweetalert";
function Edit({ employees, selectedEmployee, setIsEditing, setEmployees }) {
    const id = selectedEmployee.id;
    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);
    console.log("called")
    const handleUpdate = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal({
                icon: "error",
                title: "Error",
                text: "All fields are required",
                showConfirmButton: true
            });
        }
        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }
        setEmployees(employees);
        setIsEditing(false);
        Swal({
            icon: "success",
            title: "Updated",
            text: `${employee.firstName} ${employee.lastName} "Data has been Updated Succesfully"`,
            showConfirmButton: true,
            timer: 1000,
        })
    }
    return (
        <div className="" >
            <form onSubmit={handleUpdate} className="addEmployeeForm">
                <h1>Edit Employee</h1>
                <label htmlFor="firstName"><b>First Name</b></label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} /><br/>
                <label htmlFor="lastName"> <b>Last Name</b></label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} /><br/>
                <label htmlFor="email"><b>Email</b></label>
                <input
                    type="eamil"
                    id="email"
                    name="eamil"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /><br/>
                <label htmlFor="salary"><b>Salary ($)</b></label>
                <input
                    type="number"
                    id="salary"
                    name="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)} /><br/>
                <label htmlFor="date"><b>Date</b></label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                /><br/>
                <div style={{ marginTop: '6px' }}>
                    <input className="editEmpUpdateBtn" type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="editEmpCancelBtn"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)} />
                </div>



            </form>

        </div >
    )
}
export default Edit;