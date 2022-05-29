import { useContext } from 'react'
import { TasksContext } from '../../../contexts/tasks.context'
import './style.css'

function Task({ task }) {
    const { onDeleteTask } = useContext(TasksContext)

    // comunica que se ha dado click al boton
    const handleRemove = () => {
        onDeleteTask(task.id) // pasamos al padre al accion
    }

    const handleDragStart = (e) => {
        e.dataTransfer.setData("task", JSON.stringify(task))
    }

    return (

        <div className='wrap-task' draggable onDragStart={handleDragStart}>
            <div className='title-button'>
                <div className='state-title'>
                    <div className='task-state'></div>
                    <span className='task-title'>{task.title}</span>
                </div>
                <button onClick={handleRemove}>X</button>
            </div>
            <p className='task-info'>#{task.id} created on {task.date}</p>
        </div>
    )
}

export default Task;