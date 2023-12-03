import React from 'react'

function TaskList({Task , ondelete}) {
  return (
    <>
    <li style={{display:'flex'}}>{Task}</li>  <button>+</button> <button onClick={ondelete}>delete</button>
    </>
  )
}

export default TaskList
