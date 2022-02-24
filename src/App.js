import logo from './logo.svg';
import './App.css';
import HeaderClass from './components/HeaderClass';
import HeaderFunc from './components/HeaderFunc';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import HomeComponent from './components/BaiTapLayout/HomeComponent';

function App() {
  return (
    <div className='App'>
      {/* <HomeComponent /> */}
      <DataBinding />
    {/* <HeaderClass />
    <HeaderFunc /> */}
      <HandleEvent />
    </div>
  );
}

export default App;
