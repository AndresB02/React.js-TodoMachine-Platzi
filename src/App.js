import { TodoCounter } from './componenetes/TodoCounter/TodoCounter';
import { TodoSearch } from './componenetes/TodoSearch/TodoSearch';
import { TodoList } from './componenetes/TodoList/TodoList';
import { TodoItem } from './componenetes/TodoItem/TodoItem';
import { CreateTodoButton } from './componenetes/CreateTodoButtom/CreateTodoButtom';
import React from 'react';

const defaultTodos = [
  { text: 'Hacer el curso de introducción a react', completed: false},
  { text: 'Realizar el segundo challenge de Alura & Oracle', completed: false},
  { text: 'Completar el técnico del Sena', completed: true},
  { text: 'Completar todos los cursos de la parte fronted de Alura & Oracle', completed: false},
  { text: 'Completar el curso de Vtex', completed: true}
]

function App() {
  const [searchValue, setSearchValue] = React.useState ('');

  console.log('los usuarios buscand to-dos de ' + searchValue)
  return (
    //se puede borrar el React.Fragment y solo dejar los signos de meno y mayor que
    <>
      <TodoCounter completed={3} total={5} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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

    </>
  );
}

export default App ;
