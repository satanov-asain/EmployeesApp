import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {name:"Даурен Гажипов", salary : 120000, increaseClass : false, id : 1},
                {name:"Артем Бер", salary : 320000, increaseClass :true, id : 2},
                {name:"Ергали Кажыахметов", salary : 240000, increaseClass :true, id : 3}   
            ]
        }
    }

    deleteEmployee=(id)=>{
        this.setState(({data}) => {
            return{
                data : data.filter(item=>item.id!==id)
            }
        })
    }

    render(){
        return(
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data = {this.state.data} onDelete={this.deleteEmployee}/>
                <EmployeesAddForm/> 
            </div>
            
        )
    }
}


export default App;
