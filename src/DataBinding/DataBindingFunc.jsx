import React from 'react'

export default function DataBindingFunc() {

    const title = "Nguyễn Văn B";

    const  renderTitle = () => {
        return <p>demo</p>
    }

  return (
    <div className='container'>
        <h3>{title}</h3>
        {/* ta có thể lồng một hàm hoặc một giá trị biến thông qua dấu {} */}
        <p>{renderTitle()}</p> 
    </div>
  )
}
