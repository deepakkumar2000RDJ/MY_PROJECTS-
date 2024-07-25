import { useState } from 'react' // importing hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*
  let counter = 5
  const addValue = () => {
    // console.log("Value Added", Math.random());
    // console.log("Clicked", Math.random());
    console.log("Clicked", counter);
    counter = counter + 1
  }
   */

  // HOOKS  
  //  useState is responsible for changing the state , propogate the changes in UI.

  const [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log("Clicked", counter);
    // counter = counter + 1
    //setCounter(counter)
    if (counter > 19) {
      console.log("final highest ivalue reached");
    }
    else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter < 1) {
      console.log("final lowest value reached");
    }
    else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Hello! Deepakkuamar</h1>
      <h2> Counter Value {counter} </h2>

      <button style={{ backgroundColor: 'aliceblue' }}
        onClick={addValue}
      > Add Value</button>

      <br />
      <button style={{ backgroundColor: 'ButtonFace' }}
        onClick={removeValue}

      > Remove Value </button>

      <footer>
        <p> Default Add Value is {counter} </p>
      </footer>


    </>
  )
}

export default App
