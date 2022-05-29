import { useEffect, useState } from 'react';
import Form from '../shared-components/form';
import Todo from '../todo';
import './style.css'

function Board({ onUpdate }) {
    const [tasks, setTasks] = useState(() => {
        // pone como estado inicial lo q hay en storage, sino []
        const stored = localStorage.getItem('tasks')
        return stored ? JSON.parse(stored) : []
    })

    // Realiza acciones cada vez que se acualiza el task
    useEffect(() => {
    // Guarda en storage las tasks
        localStorage.setItem('tasks', JSON.stringify(tasks))
    // Comunica la fecha de creacion del ultimo task creado en el array
        if (tasks.length > 0) {
            const lastDateTask = tasks[tasks.length-1].date
            onUpdate(lastDateTask)
        }
    }, [tasks])

    // crea las tasks
    const handleCreateTask = (e, status) => {
        // creamos una variable task que declara el objeto con sus propiedades
        const task = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            title: e,
            status: status,
            date: new Date().toLocaleString()
        }
        // Hace una copia de lo que habia en el array actual mas el nuevo
        setTasks((prevTasks) => [...prevTasks, task])
    }

    // Elimina las tareas por status
    const handleClearTask = (status) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.status !== status)) // filtra los que no cumplen el estado (generico)
    }

    // Elimina la tarea por id
    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id)) // filtra los que no cumplen el id
    }

    return (
        <div className='board-wrapper App-container'>
            <Todo
                title="TODO"
                tasks={tasks.filter(task => task.status === '')}
                onCreateTask={e => handleCreateTask(e, '')}
                onRemoveTask={handleDeleteTask}></Todo>
            <Todo
                title="IN PROGRESS"
                tasks={tasks.filter(task => task.status === 'pending')}
                onCreateTask={e => handleCreateTask(e, 'pending')}
                onRemoveTask={handleDeleteTask}></Todo>
            <Todo
                title="DONE"
                clear
                tasks={tasks.filter(task => task.status === 'done')}
                onClearDone={() => handleClearTask('done')}
                onCreateTask={e => handleCreateTask(e, 'done')}
                onRemoveTask={handleDeleteTask}></Todo>
        </div>
    )
}

export default Board;