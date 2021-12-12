import './employees-list-item.css';

const EmployeesListItem = (props) => {

    let liClassNames = "list-group-item  d-flex justify-content-between";
    props.increaseClass ? liClassNames += " increase":liClassNames += "" ;

    return (
        <li className={liClassNames}>
            <span className="list-group-item-label">{props.name}</span>
            <input type="text" className="list-group-item-input" defaultValue={props.salary + 'тг'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;