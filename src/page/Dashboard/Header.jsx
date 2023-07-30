import React from "react";
import PersonAdAlt1Icon from '@mui/icons-material/PersonAddAlt1';



function Header({setIsAdding}){
    return(
        <>
        <h1 className="heading">Employee Management System</h1>
        <button  className="btnAddEmployee" onClick={()=> setIsAdding(true)}><center className="btnAddEmployeeCenter"><PersonAdAlt1Icon/><b>Add </b></center></button>
        </>
    )
}
export default Header