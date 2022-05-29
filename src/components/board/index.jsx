import { useContext, useEffect } from 'react';
import { TasksContext } from '../../contexts/tasks.context';
import Todo from '../todo';
import './style.css'

function Board({ onUpdate }) {
    const {tasks} = useContext(TasksContext);

    // Realiza acciones cada vez que se acualiza el task
    useEffect(() => {
    // Comunica la fecha de creacion del ultimo task creado en el array
        if (tasks.length > 0) {
            const lastDateTask = tasks[tasks.length-1].date
            onUpdate(lastDateTask)
        }
    }, [tasks])

    return (
        <div className='board-wrapper App-container'>
            <Todo
                title="TODO"
                status=""
                tasks={tasks.filter(task => task.status === '')}></Todo>
            <Todo
                title="IN PROGRESS"
                status="pending"
                tasks={tasks.filter(task => task.status === 'pending')}></Todo>
            <Todo
                title="DONE"
                status="done"
                clear
                tasks={tasks.filter(task => task.status === 'done')}></Todo>
        </div>
    )
}

export default Board;