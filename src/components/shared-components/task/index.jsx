import './style.css'

function Task({ task, onRemove }) {

    // comunica que se ha dado click al boton
    const handleRemove = () => {
        onRemove() // pasamos al padre al accion
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

        </div>

    )
}

export default Task;