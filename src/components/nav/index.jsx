import { useContext } from 'react';
import { TasksContext } from '../../contexts/tasks.context';
import './style.css';
import {FcSearch} from 'react-icons/fc'

function Nav({lastDateUpdate}) {

   const {filterTasks} = useContext(TasksContext)

    return ( 
    <div className="wrap-navigation App-container">
        <div>
            <p className='bold'>Version 1.0</p>
            <p>Update {lastDateUpdate}</p>
        </div>
        <div className='search'>
        <div><FcSearch></FcSearch></div>
        <input onChange={filterTasks} className="input" type="text" placeholder="Filter tasks" />
        </div>
    </div>
    )
}

export default Nav;