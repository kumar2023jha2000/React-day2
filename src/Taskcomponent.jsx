import React, {useState} from 'react'
import TaskItem from './TaskItem'



function Taskcomponent() {
 
  const [inputValue, setInputValue] = useState(" ")
  const [inputArr, setInputArr] = useState([])

   const handelChange = (e)=>{
     setInputValue(e.target.value)
   }

   const addArr = () =>{
    setInputArr([...inputArr, inputValue])
    
    setInputValue('')
   
   }

   const handelondelete = (index)=>{
    const update = [...inputArr]
    update.splice(index,1)
    setInputArr(update)
   }
   
  return (
    <div className='taskComponent'>

      <div className="taskForm">

        <div className="input_btn_container"> 
          <input type="text" id='input' className='inputbox' value={inputValue} onChange={handelChange} /> 
          <button className='addbtn' onClick={addArr}>add</button>
        </div>

        <TaskItem value={inputArr} ondelete={handelondelete}  />
      </div>
    </div>
  )
}

export default Taskcomponent
