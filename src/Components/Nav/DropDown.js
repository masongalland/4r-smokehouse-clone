import React from 'react'

function DropDown({active}) {
  return (
    <div className={active ? "drop-down drop-open" : "drop-down"}>
      <ul className="drop-down-list">
        <li>menu</li>
        <li>locations</li>
        <li>catering</li>
        <li>shop</li>
        <li>about</li>
        <li>order online</li>
      </ul>

    </div>
  )
}

export default DropDown
