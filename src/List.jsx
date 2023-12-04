import React from 'react'

function List({name, price}) {
  return (
    <div>
      <li>{name} $ {price}: </li>
    </div>
  )
}

export default List
