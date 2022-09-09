import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginForm.css';

function LoginForm({ Login, error }) {
  const [details, SetDetails] = useState({ email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <>
      <div className='body'>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='loginForm.css' />
        <nav className='navbar'>
          <div className='logo'>Bulkky Business</div>
          <ul className='nav-links'>
            <div className='menu'>
              <li>Home</li>
              <li>About</li>
              <li className='services'> Service</li>
              <li>Pricing</li>
              <li>Contact</li>
            </div>
          </ul>
        </nav>
      </div>
      <div>
        <form onSubmit={submitHandler} className='formLogIn'>
          <div className='form-inner'>
            <h2>Login</h2>
            {/* Error! */}
            <div className='form-group'>
              <label htmlFor='email'>Email: </label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={(e) =>
                  SetDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                name='password'
                id='password'
                onChange={(e) =>
                  SetDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <input type='submit' value='LOGIN' />
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
