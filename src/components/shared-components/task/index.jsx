import { useContext } from 'react'
import { TasksContext } from '../../../contexts/tasks.context'
import './style.css'

const statusValues = ['todo', 'pending', 'done']

function Task({ task }) {
    const { onDeleteTask, onUpdateStatus } = useContext(TasksContext)

    // comunica que se ha dado click al boton
    const handleRemove = () => {
        onDeleteTask(task.id) // pasamos al padre al accion
    }

    return (

        <div className='wrap-task' >
            <div className='title-button'>
                <div className='state-title'>
                    <div className='task-state'></div>
                    <span className='task-title'>{task.title}</span>
                </div>
                <button onClick={handleRemove}>X</button>
            </div>
            <p className='task-info'>#{task.id} created on {task.date}</p>

            <div className='actions'>
                {statusValues.map(status => status !== task.status && (
                    <button key={status} onClick={() => onUpdateStatus(task, status)}>{status}</button>
                ))}
            </div>
        </div>

    )
}

export default Task;