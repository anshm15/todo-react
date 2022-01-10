import React from 'react'
import { TodoItem } from '../components/TodoItem'

export const Todos = ({todohead, todos, onDelete}) => {
    return (
        <div>
            <h4 className='py-3'>{todohead}</h4>
            {todos.length===0? "No todos displayed!":
            todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
            })}
        </div>
    )
}
