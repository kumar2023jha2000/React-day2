import React from 'react'
import TaskList from './TaskList'

function TaskItem({value, ondelete}) {

  return (
    <div>
      {value.map((value, index) =>(
        <TaskList key = {index} Task={value} ondelete={()=>ondelete(index)}/>
      ))}
    </div>
  )
}

export default TaskItem
