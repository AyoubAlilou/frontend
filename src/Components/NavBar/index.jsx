import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div className='nav-bar-container'>
      {/* Left side: Branding */}
      <div className='branding'>
        <span>Your Brand</span>
      </div>

      {/* Middle: Search Bar */}
      <div className='search-bar'>
        <input type='text' placeholder='Search...' />
        <button type='button'className='form-input'>Search</button>
      </div>

      {/* Right side: Profile, Login/Logout buttons */}
      <div className='user-actions'>
        {/* Assuming you have a user profile */}
        <div className='profile'>
          <span>User Profile</span>
        </div>

        {/* Assuming you have a login/logout functionality */}
        <div className='login-logout'>
          <button type='button'><Link to='/login'>Login</Link></button>
          {/* Or */}
          {/* <button type='button'>Logout</button> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
