import { useContext } from 'react'
import { TasksContext } from '../../../contexts/tasks.context'
import './style.css'
import {AiFillDelete, AiOutlineCheckCircle } from 'react-icons/ai'
import {RiFocusLine} from 'react-icons/ri'

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
                    <div className={task.status==='done'?'task-state-two':'task-state'}>{task.status==='done'?<AiOutlineCheckCircle></AiOutlineCheckCircle>:<RiFocusLine></RiFocusLine>}</div>
                    <span className='task-title'>{task.title}</span>
                </div>
                <button onClick={handleRemove} className='button-delete'><AiFillDelete></AiFillDelete></button>
            </div>
            <p className='task-info'>#{task.id} created on {task.date}</p>
        </div>
    )
}

export default Task;