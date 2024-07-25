import { useCallback, useEffect, useRef, useState, } from 'react'
import './App.css'


function App() {

  //defining useStates

  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [specialcharAllow, setSpecialCharAllow] = useState(false)
  const [password, setPassword] = useState("") // we put double cots "" because generated passward is in string format we want to display.

  // we are creating a function here.

  const passGentr = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"  // if user want number iin their password the this will add in the str.
    if (specialcharAllow) str += "!@#$%^&*-_+=[]{}~`" // if user want specialChar in their password the this will add in the str.

    // This for loop is used to generate the random password accoring to the length set by user.
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    // To read the value 
    setPassword(pass)

  }, [length, numAllow, specialcharAllow])


  // defining useRefHook
  const passwordReference = useRef(null)
 // defining function for copy
  const copyToClipBoard = useCallback( () => {
    passwordReference.current?.select();
    passwordReference.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(password)
  },[password])




  useEffect(() => {

    passGentr()

  }, [length, numAllow, specialcharAllow, passGentr])



  return (
    <>
      <div>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-300'>
          <h1 className='text-4xl text-center my-5'>PasswordGenerator</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder='Password'
              readOnly
              ref={passwordReference}
            />
            <button
            onClick={copyToClipBoard}
            className='outliine-none  bg-blue-500  text-white px-3 py-0.5 shrink-0 '>
              Click
            </button>

          </div>


          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={8}
                max={15}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label> Length: {length} </label>
            </div>

            <div className='flex item-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numAllow}
                id='numinput'
                onChange={() => { setNumAllow((prev) => !prev) }}
              />
              <label htmlFor="numinput">Numbers</label>
            </div>

            <div className='flex item-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={specialcharAllow}
                id='numinput'
                onChange={() => { setSpecialCharAllow((prev) => !prev) }}
              />
              <label htmlFor="numinput">Characters</label>
            </div>



          </div>




        </div>
      </div>

    </>
  )
}

export default App
