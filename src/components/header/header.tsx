import React from 'react';
// import logo from './logo.svg';
import './header.css';
import Tooltip from '@mui/material/Tooltip';

function Header() {
  return (
    <div className="header">
      <p className='signature'>Sutre</p>
      <nav className="main-menu">
        <ul>
          <a className="icon icon-link-github" href="https://github.com/iAmTuta" title="Github">
            <Tooltip title="GitHub">
            <i className="icon icon-github"></i>
            </Tooltip>
          </a>
          <a className="icon icon-link-twitter" href="https://twitter.com/8b9796d3faa3403" title="Twitter">
            <Tooltip title="Twitter">
              <i className="icon icon-twitter"></i>
            </Tooltip>
          </a> 
             
        {/* <a className="icon icon-link-github" href="github.com" title="Github"><i className="icon icon-github">Github</i></a> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
