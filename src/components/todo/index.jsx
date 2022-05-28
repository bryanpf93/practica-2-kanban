import { useState } from 'react';
import Form from '../shared-components/form';
import Task from '../shared-components/task';
import './style.css';

/**
 * Props que recibe :
 * clear : booleano que indica si se muestra el clear  o no
 * tasks : tareas   
 */

function Todo({title, clear, tasks, onCreateTask, onRemoveTask, onClearDone}) {
    const [showForm, setShowForm] = useState(false)

    // muestra el form cuando es TRUE
    const handleCreateTask = () => {
        setShowForm(true)
    } 

    // añade una tarea a la columna
    const handleAddTask = (e) => {
        onCreateTask(e)  // manda por prop al padre y el padre se encarga de añadir
        setShowForm(false)  // oculta el form cuando le damos al boton add
    }

    // pasa a FALSE el form y lo oculta 
    const handleCancelTask = () => {
        setShowForm(false)
    }

    // manda por prop al padre y el padre se encarga de ejecutarlo (limpia la columna)
    const handleClearAll = () => {
        onClearDone()
    }

    // comunica al padre que elimine el task, porque el array esta en el board
    const handleRemoveTask = (e) => {
        onRemoveTask(e)
    }

    return (

        <>
            <div className="container-todo">
                <div className="header">
                    <div className='circle-todo'>
                        <div className="circle">{tasks.length}</div>
                        <p className="todo">{title}</p>
                    </div>
                    <button onClick={handleCreateTask}  className="plus">+</button>
                    {clear && <button onClick={handleClearAll}>Clear all</button>}
                </div>

                <div className='container-tasks'>
                    {tasks && tasks.map( task => <Task key={task.id} task={task} onRemove={() => handleRemoveTask(task.id)} ></Task>
                    
                    )}
                </div>
                {showForm && <Form onAdd={handleAddTask} onCancel={handleCancelTask}></Form>}
            </div>
        </>
    )
}

export default Todo;