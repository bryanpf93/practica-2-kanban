
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Board from './components/board';
import { useState } from 'react';
import { TasksProvider } from './contexts/tasks.provider';



function App() {
  const [lastUpdate, setLastUpdate] = useState('');
  
  // Recupera la fecha de creacion del ultimo
  const handleBoardUpdate = (e) => {
    setLastUpdate(e)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header className></Header>
      </div>

      <TasksProvider>
        <div className="App-nav">
          <Nav lastDateUpdate={lastUpdate}></Nav>
        </div>

        <div className="App-body">
          <Board onUpdate={handleBoardUpdate}></Board>
        </div>
      </TasksProvider>

    </div>
  );
}

export default App;
