
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Board from './components/board';
import { useState } from 'react';



function App() {
  const [lastUpdate, setLastUpdate] = useState('');
  
  // Recupera la fecha de creacion del ultimo
  const handleBoardUpdate = (e) => {
    setLastUpdate(e)
  }

  return (
    <>
    
    <Header></Header>
    <Nav lastDateUpdate={lastUpdate}></Nav>
    <Board onUpdate={handleBoardUpdate}></Board>

     
    </>
  );
}

export default App;
