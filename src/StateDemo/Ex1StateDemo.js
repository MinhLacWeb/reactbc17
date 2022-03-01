import React, { Component } from 'react';
import Baitapchonxe from './BaiTapChonXe';

class Ex1statedemo extends Component {

    state = {
        fontSize:17,
        homeColor:'pink'
    }



    render() {
        return (
            <div className='container'>
                <p style={{fontSize:this.state.fontSize+'px'}} className='p-2 bg-dark text-white'>Nội dung văn bản</p>
                <button className='btn btn-outline-primary' onClick={()=>{
                    let newFontSize = this.state.fontSize + 5;
                    this.setState({
                        fontSize : newFontSize
                    })
                }}>+</button>
                <button className='btn btn-outline-primary ml-2'onClick={()=>{
                    let newFontSize = this.state.fontSize - 5;
                    this.setState({
                        fontSize : newFontSize
                    })
                }}>-</button>
               <hr />
               <h3>Bài tập thay đổi màu sắc</h3>
               <h3 className='fa fa-home' style={{fontSize:'100px',color:this.state.homeColor}}></h3>
               <br />
               <button className='btn btn-danger' onClick={()=>{
                   this.setState({
                       homeColor:'red'
                   })
               }}>Red</button>
               <button className='btn btn-success ml-2' onClick={()=>{
                   this.setState({
                       homeColor:'green'
                   })
               }}>Green</button>
               <button className='btn btn-primary ml-2' onClick={()=>{
                   this.setState({
                       homeColor:'blue'
                   })
               }}>Blue</button>
               <hr />
               <h3>Bài tập 3: chọn màu xe</h3>
               <Baitapchonxe />
            </div>
        );
    }
}

export default Ex1statedemo;
