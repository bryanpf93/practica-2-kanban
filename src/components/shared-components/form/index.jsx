import { useState } from 'react'
import './style.css'

// pasamos por prop a su padre las opciones de añadir y cancelar
function Form ({onCancel, onAdd}){

    
    const [text, setText] = useState('')
    
    // comunica que se ha click al boton cancelar 
    const handleCancel = e => {
        e.preventDefault()
        onCancel()
    }
    
     // comunica que se ha click al boton añadir
    const handleAdd = e => {
        e.preventDefault()
        onAdd(text)
    }

    // recogemos el valor que poner en el textarea
    const handleText = e => {
        setText(e.target.value)
    }


    return (
        
            <form className='wrap-form'>
                <textarea className='text-area' name="" id="" cols="25" rows="3" onChange={handleText}></textarea>
                <div className='buttons'>
                    <button className='buttons-color button-add'  onClick={handleAdd}>Add</button>
                    <button className='buttons-color button-cancel' onClick={handleCancel}>Cancel</button>
                </div>
              
            </form>
       
    )
}

export default Form;