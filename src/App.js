import logo from './logo.svg';
import './App.css';
import HeaderClass from './components/HeaderClass';
import HeaderFunc from './components/HeaderFunc';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Rendering_Conditions from './Rendering_Conditions/Rendering_Conditions';
import HomeComponent from './components/BaiTapLayout/HomeComponent';
import Ex1statedemo from './StateDemo/Ex1StateDemo';
import Renderwithmap from './RenderWithMap/RenderWithMap';
import Quanlydanhsachphim from './RenderWithMap/QuanLyDanhSachPhim';

function App() {
  return (
    <div className='App'>
      {/* <HomeComponent />
      <Rendering_Conditions />
      <DataBinding />
      <HeaderClass />
      <HeaderFunc />
      <HandleEvent />
      <Ex1statedemo />
      <Renderwithmap /> */}
      <Quanlydanhsachphim />
    </div>
  );
}

export default App;
