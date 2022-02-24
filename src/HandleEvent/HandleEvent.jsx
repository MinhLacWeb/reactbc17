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
          <button onClick={this.handleClick}>Show message</button>
          <button onClick={() => {
        alert('Xin chào các bạn');
    }}>Show message</button>
    <hr />
    <button onClick={this.showMess.bind(this,'Lạc Khải Minh')}>Click me</button>
      </div>
    )
  }
}
