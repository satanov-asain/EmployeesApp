import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLiked}) =>{

    const employeesItemRender =data.map(item=>{
        const {id, ...itemProps} = item;
        
        return(
            <EmployeesListItem key = {id} {...itemProps} 
                               onDelete={()=>onDelete(id)} 
                               onToggleIncrease={()=>onToggleIncrease(id)}
                               onToggleLiked={()=>onToggleLiked(id)} />
        )
    })

    return(
        <ul className="app-list list-group">
           {employeesItemRender}
        </ul>
    )
}

export default EmployeesList;