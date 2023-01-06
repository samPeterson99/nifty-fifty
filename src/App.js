import React, {  useState, useRef } from "react";
import './App.css';

//instead of the TOP project, I'm going to make my a text based version of the classic name all fifty states game

const App = () => {
  //create component that plays the game
  // create shame box
  //create landing graphic and instructions
  const input = useRef('')
  const [found, setFound] = useState([]);
  const [shame, setShame] = useState([]);

  const arrayOfStateNames = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


  const handlePlayerInput = (input) => {
    let beautifiedInput = beautifyString(input)
    if (arrayOfStateNames.indexOf(beautifiedInput) < 0) {
        setShame([...shame, input]);
      } else if (arrayOfStateNames.indexOf(beautifiedInput) >= 0 && found.indexOf(beautifiedInput) >= 0) {
        //shame the user
      } else {
        setFound([...found, beautifiedInput])
      }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePlayerInput(e.target.value);
      e.target.value = ''
    }
  }

  const beautifyString = (string) => {
    let prettyString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    return prettyString
  }

  const foundItems = found.sort().map((state) =>
      <li>{state}</li>
  );

  const shameBoxContents = shame.map((disgrace) => 
      <li>{disgrace}</li>
  )




  return (
    <div>
      <input type='text' ref={input} onKeyDown={handleKeyPress}></input>
      <ol>{foundItems}</ol>
      <ul>
        <h3>Shame Box</h3>
        {shameBoxContents}
      </ul>
    </div>
  )

}

export default App;
