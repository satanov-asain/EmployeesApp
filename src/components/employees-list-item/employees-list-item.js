import {Component} from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props){
        super(props);
        this.state ={
            increaseClass:false,
            likedClass: false
        }
    }
    onIncrease =()=>{
        this.setState(({increaseClass})=>({
            increaseClass: !increaseClass
            })
        )
    }

    onLiked=()=>{
        this.setState(({likedClass})=>({
                likedClass:!likedClass
                }
            )
        )
    }
    render(){
        const {name, salary, onDelete} = this.props;
        const {increaseClass, likedClass} = this.state;
        let liClassNames = "list-group-item  d-flex justify-content-between";
        increaseClass ? liClassNames += " increase":liClassNames += "" ;
        likedClass? liClassNames +=" like": liClassNames+="";
        
        
        return (
            <li className={liClassNames}>
                <span className="list-group-item-label"
                      onClick={this.onLiked}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + 'тг'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
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



