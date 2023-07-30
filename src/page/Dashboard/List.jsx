import React from "react";



function List({ employees, handleEdit, handleDelete }, Init) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null,

    });
    

    return (
        <div className="listDiv">
            <table className="">
                <thead className="">
                    <tr className="thead">
                        <th >No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salery</th>
                        <th>Date</th>
                        <th colSpan={2} className=""> Actions</th>
                    </tr>
                </thead>
                <tbody className="">
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id} className="tb">
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}
                                </td>
                                <td>{employee.date}  </td>

                                <td className="text-right">
                                    <button className="buttonMutedButton" onClick={() => handleEdit(employee.id)}>Edit</button>
                                    <button onClick={() => handleDelete(employee.id)}
                                        className="deleteButton"
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))
                    ) : (

                        <tr>
                            <td colSpan={7}>No Employees Found</td>
                        </tr>




                    )}

                </tbody>
            </table>
        </div>

    )

}
export default List;