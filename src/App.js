import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div><Outlet/></div>
    </div>
  );
}

export default App;
