import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = (props) =>{

    const employeesItemRender = props.data.map(item=>{
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem key = {id} {...itemProps}/>
        )
    })

    return(
        <ul className="app-list list-group">
           {employeesItemRender}
        </ul>
    )
}

export default EmployeesList;