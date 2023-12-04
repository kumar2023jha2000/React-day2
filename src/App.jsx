import React, { useState } from 'react'
import List from './List'

function App() {
  const [item, setitem] = useState([
    {id:1, name:"item 1", price:10},
    {id:1, name:"item 1", price:10},
    {id:1, name:"item 1", price:10},
  ])

  const update =()=>{
    const updateitem = item.map(item =>({
      ...item, price: item.price*2
    }))
    setitem(updateitem)
  }
  return (
    <div>
      <button onClick={update}>update</button>
      {item.map(item=>(
        <List key={List.id} name={List.name} price={item.price}/>
      ))}
      
    </div>
  )
}

export default App
