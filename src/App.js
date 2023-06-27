import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButtom';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Hacer el curso de introducción a react', completed: false},
  { text: 'Realizar el segundo challenge de Alura & Oracle', completed: false},
  { text: 'Completar el técnico del Sena', completed: true},
  { text: 'Completar todos los cursos de la parte fronted de Alura & Oracle', completed: false},
  { text: 'Completar el curso de Vtex', completed: true}
]

function App() {
  return (
    <React.Fragment className="App">

      <TodoCounter completed={16} total={25} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App ;
