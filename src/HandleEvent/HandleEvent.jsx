import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    handleClick = () => {
        alert('Xin chào các bạn');
    }

    showMess = (name) => {
        alert('Xin chào ! ' + name);
    }
  render() {
    return (
      <div className='container'>
          <h3>Handle Event</h3>
          <button onClick={this.handleClick}>Show message</button>  {/* 2 cách viết cách 1 gọi hàm , cách 2 viết thẳng hàm vào sự kiện*/}
          <button onClick={() => {
        alert('Xin chào các bạn');
    }}>Show message</button>
    <hr />
    {/* <button onClick={this.showMess.bind(this,'Lạc Khải Minh')}>Click me</button> bind() dùng để chặn không cho hàm chạy tức thời trong 
     lúc render giao diện */}
    {/* <button onClick={this.showMess('Lạc Khải Minh')}>Click me</button> kết quả sẽ chạy ngay lập tức khi render giao diện */}
    {/* <button onClick={() =>{this.showMess('Lạc Khải Minh')}}>Click me</button>  */}
      </div>
      
    )
  }
}
