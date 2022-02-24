import React from 'react'

export default function DataBindingFunc() {

    const title = "Cybersoft";

    const  renderTitle = () => {
        return <p>demo</p>
    }

  return (
    <div className='container'>
        <h3>{title}</h3>
        <p>{renderTitle()}</p>
    </div>
  )
}
