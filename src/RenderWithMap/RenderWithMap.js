import React, { Component } from 'react';

class Renderwithmap extends Component {

    productList = [
        {id:1,name:'black car',price:1000,img:'../img/products/black-car.jpg'},
        {id:1,name:'red car',price:2000,img:'../img/products/red-car.jpg'},
        {id:1,name:'silver car',price:3000,img:'../img/products/silver-car.jpg'},
        {id:1,name:'steel car',price:4000,img:'../img/products/steel-car.jpg'}
    ]

    renderProduct = () => {
        //output [<tr></tr>,<tr></tr>,<tr></tr>]

        // let result = [];
        // for (let index = 0; index < this.productList; index++) {
        //     let product = this.productList[index];
        //     let trProduct = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img src={product.img} alt='...' width={100}/></td>
        //     </tr>;

        //     result.push(trProduct);
        // }
        // //result = [<tr></tr>,<tr></tr>,<tr></tr>]
        // console.log(result);
        // return result;

        let result = this.productList.map((product,index)=>{
            return <tr key={index}>
                     <td>{product.id}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td><img src={product.img} alt='...' width={100}/></td>
                   </tr>;
        });
        return result;
    }

    renderDivBootstrap = () => {
        // output [<div className='col-4'></div>,<div className='col-4'></div>]
        return this.productList.map((product,index)=>{
            return <div className='col-3' key={index}>
                <div className='card'>
                    <img src={product.img} alt='...' />
                    <div className='card-body'>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button className='btn btn-success'>View Detail</button>
                    </div>

                </div>
            </div>
        })
    }


    render() {

        //console.log(<div>123</div>);

        return (
            <div className='container'>
                <h3>Product List</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* [<tr></tr>,<tr></tr>,<tr></tr>] */}
                        {this.renderProduct()}                       
                    </tbody>
                </table>
                <hr />
                <h3>Product render column</h3>
                <div className='row'>
                    {this.renderDivBootstrap()}
                </div>
            </div>
        );
    }
}

export default Renderwithmap;
