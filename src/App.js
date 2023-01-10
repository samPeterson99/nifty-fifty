import React, {  useState, useRef } from "react";
import PlayTheGame from "./Input-and-Score";
import './App.css';

//instead of the TOP project, I'm going to make my a text based version of the classic name all fifty states game
//add winning logic
//style landing page
//style winning page
const App = () => {
  const [pageState, setPageState] = useState('startPage')

  const startPageClick = () => {
    setPageState('playTheGame')
  }

    if (pageState === 'startPage') {
      return (
      <div id="startPage" onClick={startPageClick}>
        <h1 id="startTitle">Fifty</h1>
        <h5 id="startInstructions">click anywhere to begin</h5>
        <h1 id="startTitle">Nifty</h1>
      </div>
      )
    } else {
      return <PlayTheGame />
    }

}

export default App;
