import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import {v4 as uuidv4} from 'uuid';
const superId=uuidv4();
console.log(superId);
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {name:"Даурен Гажипов", salary : 120000, increase : false , like : false , id : 1},
                {name:"Артем Бер", salary : 320000, increase : false , like : false , id : 2},
                {name:"Ергали Кажыахметов", salary : 240000, increase : false , like : false , id : 3}   
            ]        
        }
        this.maxId=4
        
    }
  
    deleteEmployee=(id)=>{
        this.setState(({data}) => {
            return{
                data : data.filter(item=>item.id!==id)
            }
        })
    }

    addEmployee=(eName,eSalary)=>{
        const newEmployee={
            name:eName,
            salary:eSalary,
            increase: false,
            like:false,
            id: this.maxId++
        };
        
        this.setState(({data}) => {
            const newArr = [...data, newEmployee];
            return {
                data: newArr
            }
        });
    }
    
    onToggleProp=(id, prop)=>{
      this.setState(({data})=>{
          return{
              data:data.map(item=>{
                  if(item.id===id){
                      return {...item, [prop]:!item[prop] }
                  }else{
                      return item;
                  }
              })
          }
      })
    }

    render(){
        const total=this.state.data.length;
        const premia = this.state.data.filter(item=>item.increase).length;
        return(
            <div className="app">
                <AppInfo total={total}
                         premia={premia}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data = {this.state.data} 
                               onDelete={this.deleteEmployee}
                               onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addEmployee}/> 
            </div>
            
        )
    }
}


export default App;
