import './App.css';
import { Navbar } from './components/Navbar';
import { Todos } from './components/Todos';
import { useState } from 'react';
import { AddTodo } from './components/AddTodo';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete")
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo = (title)=>{
    console.log("adding todo", title)
    let sno;
    if(todos.length==0){
      sno= 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Fruits - Apple and Grapes"
    },
    {
      sno: 2,
      title: "Hair - Shampoo and Conditioner"
    }
  ])
  return (
    <>
    <Navbar title="My Todos List" about="About us"/>
    <div className="container">
      <AddTodo pagehead="My Todos" addTodo={addTodo} />
    <Todos todohead="Todos List" todos={todos} onDelete={onDelete}/>
    </div>
    </>
  );
}

export default App;
