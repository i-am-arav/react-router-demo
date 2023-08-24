import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Newuser from './pages/Newuser';

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
      <Route path='/users'>
        <Route index element={<Users />} />
        <Route path=":userId" element={<UserDetails />} />
        <Route path='new' element={<Newuser />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
