import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            salary:'',
            id:'',
            placeholderName : 'Как его зовут',
            placeholderSalary :'З/П в тг'
        }
    }

    onValueChange=(e)=>{
        this.setState(()=>{
            return(
                {[e.target.name] : e.target.value}
            )
        })

    }
    addEmployee=(e)=>{
        const {name,salary}=this.state;
        if(name.length>=2 && salary>1000){
            e.preventDefault();
            this.props.onAdd(name, salary);
            this.setState(({name,salary})=>{
                name='';
                salary='';
                return{
                    name:name,
                    salary:salary,
                    placeholderName : 'Как его зовут',
                    placeholderSalary :'З/П в тг'
                }
            })
        }else{
            e.preventDefault();
            
            this.setState(({name,salary})=>{
                name='';
                salary='';
                return{
                    name:name,
                    salary:salary,
                    placeholderName : 'Нелепые значения',
                    placeholderSalary :'Нелепые значения'
                }
            })
        }
      
    }
    render(){
        const {name, salary, placeholderName, placeholderSalary}=this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.addEmployee}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder={placeholderName} 
                        onChange={this.onValueChange}
                        name="name"
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder={placeholderSalary}
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}



export default EmployeesAddForm;