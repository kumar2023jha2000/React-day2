import React, { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [lenght , setLenght] = useState(8) // leght definde the lenght of the password
  const [number , setnumber] = useState(false)
  const [char , setchar] = useState(false)
  const [password , setpassword] = useState('')

  // if i use to acsee input field by clicking on button than use useRef
    const passwordRef = useRef(null)



  //useCallback
  const passwordGenrator = useCallback(()=>{
   let pass = ''
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(number){
    str += "0123456789"
   }

   if(char){
   str += "!@#$%^&*(){}+=_<>?|}{[]"
  }

   for (let i = 0; i <= lenght; i++) {
    let element = Math.floor(Math.random() * str.length +1)
    pass += str.charAt(element)
   }
   setpassword(pass)

  }, [lenght, number, char, setpassword])

  const copypassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(1,6)
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useEffect hook
   useEffect(() => {
    passwordGenrator()
   },[lenght, number, char, passwordGenrator])

  return (
    <div>
      <div className="container">

      <input type="text" value={password} placeholder='password' readOnly  ref={passwordRef}/> 
      <button onClick={copypassword}>copy</button>
      
      </div>

      <input type="range"  min={6} max={100} value={lenght} onChange={(e)=>{setLenght(e.target.value)}} />
      <label htmlFor="lenget">length{lenght}</label>

      <input type="checkbox"  defaultChecked={number} onChange={()=>{setnumber((prev)=> !prev)}}/> 
      <label htmlFor="number">number</label>

      <input type="checkbox" defaultChecked={char} onChange={()=>{setchar((prev)=> !prev)}}/> 
      <label htmlFor="number">charterstics</label>


    </div>
  )
}

export default App
