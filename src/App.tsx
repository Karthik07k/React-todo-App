import React, {useState} from 'react';
import './App.css';

import {TodoTable} from './components/TodoTable';

import {NewTodoForm} from './components/NewTodoForm';



function App() {

const [showAddTodoForm,setShowAddTodoForm]=useState(false);

  const  [todos, setTodos] = useState( [
    { rowNumber: 1, rowDescription: 'feed puppy', rowAssigned: 'user one' },
    { rowNumber: 2, rowDescription: 'fwater plantsy', rowAssigned: 'user two' },
    { rowNumber: 3, rowDescription: 'other', rowAssigned: 'user one' },
  ])


  const addTodo = (description: string,assigned:string) => {
    let rowNumber=0;
    if (todos.length > 0) {
      rowNumber=todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber=1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos,newTodo] )
   
  }


  const deleteTodo=(deleteTodoRowNumber:number) =>{
    let filterd=todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filterd);
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          your todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}  deleteTodo={deleteTodo}/>
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)} 
            className='btn btn-primary'
          >{showAddTodoForm ? 'close New Todo': 'New Todo'} </button>
          {showAddTodoForm && 
         <NewTodoForm addTodo={addTodo}/>
          }
          </div>
      </div>

    </div>
  );
}

export default App;
