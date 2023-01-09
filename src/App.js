import React, {  useState, useRef } from "react";
import './App.css';

//instead of the TOP project, I'm going to make my a text based version of the classic name all fifty states game

const App = () => {
  //create win logic
  //fix state table
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
    let stringArray = string.split(' ');
    let prettyArray = stringArray.map(word =>
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    let prettyString = prettyArray.join(' ')
    return prettyString
  }


  let finds = 0;
  let shames = 0;
  const foundItems = found.sort().map((state) =>
      <li key= {finds++}>{state}</li>
  );

  const shameBoxContents = shame.map((disgrace) => 
      <li key={shames++}>{disgrace}</li>
  )




  return (
    <div id="appBox">
      <input type='text' id="inputBox" ref={input} onKeyDown={handleKeyPress}></input>
      <ol id="foundItems">{foundItems}</ol>
      <div id="shameBox">
        <h3 id="shameBoxHead">Shame Box</h3>
          <ul>
            {shameBoxContents}
          </ul>
          <h5 id="shameBoxFoot">*Ignore if not from the United States</h5>
      </div>
    </div>
  )

}

export default App;
