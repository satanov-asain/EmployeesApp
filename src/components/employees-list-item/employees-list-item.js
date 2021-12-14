import {Component} from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props){
        super(props);
      
    }

    render(){
        const {name, salary, onDelete, onToggleProp, increase, like} = this.props;
        
        let liClassNames = "list-group-item  d-flex justify-content-between";
        increase ? liClassNames += " increase":liClassNames += "" ;
        like? liClassNames +=" like": liClassNames+="";
        
        
        return (
            <li className={liClassNames}>
                <span className="list-group-item-label"
                      data-toggle='like'
                      onClick={onToggleProp}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + 'тг'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle='increase'
                        onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
