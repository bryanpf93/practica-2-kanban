
function Task({task, onRemove}) {

    // comunica que se ha dado click al boton
    const handleRemove = () => {
        onRemove() // pasamos al padre al accion
    }

    return (

        <div>
            <p>{task.title}</p>
            <p>#{task.id} created on {task.date}</p>
            <button onClick={handleRemove}>X</button>
        </div>

    )
}

export default Task;