import { useContext, useState } from 'react';
import { TasksContext } from '../../contexts/tasks.context';
import Form from '../shared-components/form';
import Task from '../shared-components/task';
import './style.css';

/**
 * Props que recibe :
 * clear : booleano que indica si se muestra el clear  o no
 * tasks : tareas   
 */

function Todo({title, status, clear, tasks}) {
    const [showForm, setShowForm] = useState(false)
    const { onCreateTask, onClearTask, onUpdateStatus } = useContext(TasksContext)

    // muestra el form cuando es TRUE
    const handleCreateTask = () => {
        setShowForm(true)
    } 

    // añade una tarea a la columna
    const handleAddTask = (e) => {
        onCreateTask(e, status)  // manda por prop al padre y el padre se encarga de añadir
        setShowForm(false)  // oculta el form cuando le damos al boton add
    }

    // pasa a FALSE el form y lo oculta 
    const handleCancelTask = () => {
        setShowForm(false)
    }

    // manda por prop al padre y el padre se encarga de ejecutarlo (limpia la columna)
    const handleClearAll = () => {
        onClearTask(status)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        const task = JSON.parse(e.dataTransfer.getData("task"));
        onUpdateStatus(task, status)
        
    }

    return (

        <>
            <div className="container-todo"  onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className="header">
                    <div className='circle-todo'>
                        <div className="circle">{tasks.length}</div>
                        <p className="todo">{title}</p>
                    </div>
                    <div className='plus-clear'>
                    <button onClick={handleCreateTask}  className="plus">+</button>
                    {clear && <button onClick={handleClearAll} className='clear-all'>Clear all</button>}
                    </div>
                </div>

                <div className='container-tasks'>
                    {tasks && tasks.map( task => <Task key={task.id} task={task} ></Task>)}
                </div>

                {showForm && <Form onAdd={handleAddTask} onCancel={handleCancelTask}></Form>}
            </div>
        </>
    )
}

export default Todo;