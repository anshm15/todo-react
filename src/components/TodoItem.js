import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
        return (
        <div>
            <h6>{todo.title}</h6>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
