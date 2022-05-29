import { useEffect, useState } from "react";
import { TasksContext } from "./tasks.context";

export const STORAGE_KEY = 'tasks'

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : []
    });
    const [filter, setFilter] = useState('')
    
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    // crea las tasks
    const onCreateTask = (e, status) => {
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
    const onClearTask = (status) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.status !== status)) // filtra los que no cumplen el estado (generico)
    }

    // Elimina la tarea por id
    const onDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id)) // filtra los que no cumplen el id
    }

    const onUpdateStatus = (task, status) => {
        const position = tasks.findIndex(t => t.id === task.id);
        tasks[position] = {...task, status};
        setTasks([...tasks]);
    }

    const filterTasks = e => {
        setFilter(e.target.value.toLowerCase())
    }

    return <TasksContext.Provider value={{
        tasks: filter ? tasks.filter(c => c.title.toLowerCase().includes(filter)) : tasks,
        setTasks,
        onCreateTask,
        onClearTask,
        onDeleteTask,
        onUpdateStatus,
        filterTasks,
    }}>{children}</TasksContext.Provider>
}
