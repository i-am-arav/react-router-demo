import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Newuser from './pages/Newuser';
import NotFound from './pages/NotFound';

function App() {
  const name = 'miller';
  return (
    <div style={{margin: '40px'}}>
      <nav style={{marginBottom: '20px'}}>
        <NavLink  to='/' >{({isActive}) => isActive ? 'Active Home' : 'Home'}</NavLink>
        <Link style={{margin:'0 10px'}} to='/about' state={name}>About</Link>
        <Link style={{margin:'0 10px'}} to='/careers'>Careers</Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/users'  element={<Users />} />
      <Route path='/users/:userId' element={<UserDetails />} />
      <Route path='/users/new' element={<Newuser />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
