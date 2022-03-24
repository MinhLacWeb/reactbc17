import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";

class RenderingConditions extends Component {
  userName = "LacMinh";
  /*
    
    state là thuộc tính có sẵn của react clas component để quản lý các giá trị thay đổi trên giao diện khi người dùng thao tác (event)
    
  */
  // isLogin = false;
  
    state = {     //gán cho state giá trị isLogin
        isLogin: false
    }

  renderLogin() {
    if (this.state.isLogin) {
      return (
        <span className="nav-item text-white">
          <a className="nav-link">Hello {this.userName}</a>
        </span>
      );
    }
    return (
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => this.handleLogin()}>
        Đăng Nhập
      </button>
    );
  }

  handleLogin(){
     
    // this.isLogin = true;  //không được gán giá trị như thế này
    // console.log(this.isLogin);
      /*
        this.setState là phương thức có sẵn của react clas component dùng để thay đổi giá trị của state. 
        Hàm setState sẽ nhân vào giá trị state mới và gọi lại hàm render => giao diện thay đổi
        this.setState: là 1 hàm bất đồng bộ, khi nó xử lý thì các đoạn code phía sau vẫn tiếp tục thực thi
      
      */
      
        // let newState = { isLogin : true} ;
        this.setState({isLogin : true }, () => {
            //Hàm sẽ chạy sau khi state thay đổi và giao diện render xong
            console.log("code");
        });
        
        // console.log(this.state)
      
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* {this.isLogin ? <span className='nav-item text-white'>
          <a className='nav-link'>Hello {this.userName}</a>
            </span> 
            : 
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng Nhập</button>} */}
            {this.renderLogin()}
          </form>
        </div>
      </nav>
    );
  }
}

export default RenderingConditions;
