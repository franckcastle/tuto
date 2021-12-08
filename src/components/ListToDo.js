import React from 'react'
import ToDo from './ToDo'

export default function ListToDo({todos, handelDelete,handelDone}) {
    return (
        <div>
           {todos.map((element,key)=>(
                    <ToDo task={element} key={key} handelDelete={this.handelDelete} handelDone={this.handleDone}/>
           ))}  
        </div>
    )
}
