import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Start } from './start/start';
import { Scores } from './groups/groups';
import { About } from './about/about';

export default function App() {
  return (
  <div className='body bg-dark text-light'>
    <header className="container-fluid">
            <h1>Let's Get Together</h1>
            <nav className='navbar fixed-top navbar-dark'>
                <div className='navbar-brand'>
                    Simon<sup>&reg;</sup>
                </div>
                <menu className='navbar-nav'>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to=''>
                        Home
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to='groups'>
                        Your Groups
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to='start'>
                        Start a Group
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to='join'>
                        Join a Group
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to='about'>
                        About
                    </NavLink>
                    </li>
                </menu>
            </nav>
        </header>
        

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/groups' element={<Groups />} />
            <Route path='/join' element={<Join />} />
            <Route path='/start' element={<Start />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className="container-fluid">
            <hr />
            <span className = "text-reset">Author Name(s)</span>
            <br />
            <a className = "text-reset" href="https://github.com/MarySeeley/cs260Fall2023/tree/main">Mary Seeley's GitHub</a>
        </footer>
  </div>);
}