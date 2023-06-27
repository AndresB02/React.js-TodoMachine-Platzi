// dentro del parentesis podemos usar la propiedad props y llamarla dentro de la funcion
//junto con el nombre que pongamos, o tambien se podria colocar de una vez las propiedades
// con su nombre y ya solo es llamar esa propiedad.
function TodoCounter( { total, completed } ) {
    return (
      <h1>
        Has completado {completed} de {total} TO-DOs
      </h1>
    );
  }

  export { TodoCounter  };