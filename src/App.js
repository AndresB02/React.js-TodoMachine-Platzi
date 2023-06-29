import React from 'react';
import { TodoCounter } from './componenetes/TodoCounter/TodoCounter';
import { TodoSearch } from './componenetes/TodoSearch/TodoSearch';
import { TodoList } from './componenetes/TodoList/TodoList';
import { TodoItem } from './componenetes/TodoItem/TodoItem';
import { CreateTodoButton } from './componenetes/CreateTodoButtom/CreateTodoButtom';

const defaultTodos = [
  { text: 'Hacer el curso de introducción a react', completed: false},
  { text: 'Realizar el segundo challenge de Alura & Oracle', completed: false},
  { text: 'Completar el técnico del Sena', completed: true},
  { text: 'Completar todos los cursos de la parte fronted de Alura & Oracle', completed: false},
  { text: 'Completar el curso de Vtex', completed: true}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState ('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    //se puede borrar el React.Fragment y solo dejar los signos de meno y mayor que
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={ () => completeTodo (todo.text)}
          onDelete={ () => deleteTodo (todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App ;
