import './style.css';

function Nav({lastDateUpdate}) {
    return ( 
    <div className="wrap-navigation App-container">
        <div>
            <p className='bold'>Version 1.0</p>
            <p>Update {lastDateUpdate}</p>
        </div>
        <input className="input" type="text" placeholder="Filter tasks" />
    </div>
    )
}

export default Nav;