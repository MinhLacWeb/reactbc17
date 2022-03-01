import React, { Component } from 'react';

class Baitapchonxe extends Component {

    state = {
        carColor:'../img/products/black-car.jpg'
    }

    handleColor = (color) => {
        this.setState({
            carColor:`../img/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col-6'>
                    <img className='w-100' src={this.state.carColor} alt="..." />
                </div>
                <div className='col-6'>
                    <div className='col-4'>
                        <button className='btn btn-dark' onClick={()=>{
                            this.handleColor('black');
                        }}>Black</button>
                    </div>
                    <div className='col-4'>
                        <button className='btn btn-danger' onClick={()=>{
                            this.handleColor('red');
                        }}>Red</button>
                    </div>
                    <div className='col-4'>
                        <button className='btn text-white' style={{background:'silver'}} onClick={()=>{
                            this.handleColor('silver');
                        }}>Silver</button>
                    </div>
                    <div className='col-4'>
                        <button className='btn text-white' style={{background:'gray'}} onClick={()=>{
                            this.handleColor('steel');
                        }}>Steel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Baitapchonxe;
