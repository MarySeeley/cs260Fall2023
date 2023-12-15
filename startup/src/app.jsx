import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Start } from './start/start';
import { Groups } from './groups/groups';
import { Join } from './join/join';
import { About } from './about/about';
import { AuthState } from './login/authState';
import { Time } from './time/time';
import { Results } from './results/results';


function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  return (
<BrowserRouter>
  <div className='body bg-dark text-light'>
    <header className="container-fluid">
            {/* <h1>Let's Get Together</h1> */}
            <nav className='navbar fixed-top navbar-dark' >
                <div className='navbar-brand'>
                    Lets Get Together
                </div>
                <menu>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to=''>
                        Home
                    </NavLink>
                    </li>
                    {/* {authState === AuthState.Authenticated && ( */}
                        <li className='nav-item'>
                        <NavLink className='nav-link' to='start'>
                            Start a Group
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
            <Route path='/' element={<Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
            />} exact />
            <Route path='/groups' element={<Groups />} />
            <Route path='/join' element={<Join />} />
            <Route path='/start' element={<Start userName={userName}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/time' element={<Time />} />
            <Route path='/results' element={<Results />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className="container-fluid">
            <hr />
            <span className = "text-reset">Author Name(s)</span>
            <br />
            <a className = "text-reset" href="https://github.com/MarySeeley/cs260Fall2023/tree/main">Mary Seeley's GitHub</a>
        </footer>
  </div>
  </BrowserRouter>);
}
function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;