import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';

function App() {
  return (
    <div style={{margin: '40px'}}>
      <nav>
        <Link style={{margin:'0 10px'}} to='/'>Home</Link>
        <Link style={{margin:'0 10px'}} to='/about'>About</Link>
        <Link style={{margin:'0 10px'}} to='/careers'>Careers</Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/careers' element={<Careers />} />
    </Routes>
    </div>
  );
}

export default App;
