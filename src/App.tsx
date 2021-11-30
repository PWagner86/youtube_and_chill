import React from 'react';
import { Header } from './components/Header/Header';
import { PlayerContainer } from './components/PlayerContainer/PlayerContainer';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <PlayerContainer/>
    </div>
  );
}

export default App;
