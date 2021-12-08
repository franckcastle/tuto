import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ListToDo from './components/ListToDo';

class App extends Component{
  state={
    tasks:[{
      id:1,
      message:'to do 1',
      done:false
    } , {
      id:2,
      message:'to do 2',
      done:false
    }]
  }
   addTask =(task) =>{
    this.setState({tasks:[...this.state.tasks,task]})
  }
  deleteTask =(id)=>{
    this.setState({tasks:this.state.tasks.filter(element=>{
      element.id != id
    })
  })}
  doneTask=(id)=>{
    this.setState({tasks:this.state.tasks.map(element=>{
    element.id == id ? {...element,done:!element.done} : element
    })})
  }
  render(){
    return(<div className='container'>
<div className='row'>
<h1> To Do List</h1>
</div>
<ListToDo todos={this.state.tasks}  handelDelete={this.deleteTask} handelDone={this.doneTask}/>

    </div>)
  
  }}