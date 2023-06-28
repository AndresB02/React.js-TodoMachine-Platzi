import './CreateTodoButtom.css'

function CreateTodoButton() {
    return (
        <button className='CreateTodoButtom'
        onClick={
          (event) => {
            console.log('le diste click')
            console.log(event)
            console.log(event.target)
          }
        }
        >+</button>
    );
  }

export { CreateTodoButton };