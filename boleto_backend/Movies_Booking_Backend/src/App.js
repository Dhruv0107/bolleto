import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Login/Register'
import Dashboard from './Componets/Dashboard'
import Add_Movies from './Componets/Dashboard/Add_Movies';
import Add_Event from './Componets/Dashboard/Add_Event';
import Add_Sport from './Componets/Dashboard/Add_Sport';
import Add_About from './Componets/Dashboard/Add_About';
import Showmoive from './Componets/Dashboard/Showmovie';
import Show from './Componets/Dashboard/index'
import Add_Blog from './Componets/Dashboard/Add_Blog';
import AllBlog from './Componets/Dashboard/AllBlog';

function App() {
  return (
    <div className="theme-cyan">
      <Routes>
        <Route path='/Login' element={( <Login />)} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={(  <Add_Movies />)} />
        <Route path='/Showmovie' element={( <Showmoive />)} />
        <Route path='/AddEvent' element={(  <Add_Event />)} />
        <Route path='/AddSport' element={(  <Add_Sport />)} />
        <Route path='/AddAbout' element={(  <Add_About />)} />
        <Route path='/AddBlog' element={( <Add_Blog />)} />
        <Route path='/AllBlog' element={(  <AllBlog />)} />
        <Route path='/index' element={( <index />)} />

      </Routes>
    </div>
  );
}

export default App;
