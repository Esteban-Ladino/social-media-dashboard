import React from 'react';
import { Number } from 'react-intl-number-format/dist/index.js';
import '../assets/styles/Header.css'

function Header(props) {
  const {
    totalFollowers,
    light,
    setLight,
  } = props;

  return (
    <header className="App-header mb-4 d-lg-flex justify-content-between align-items-center container-sm">
      <div className="">
        <h4 className={(light)? 'text-darkBlue' : 'text-lwhite' }>
          <strong>Social Media Dashboard</strong>
        </h4>
        <p className="text-grayishBlue">
          <strong className='d-flex'>Total Followers:
            <div className="ml-1"><Number locale='en-IN'>{totalFollowers}</Number></div>
          </strong>
        </p>
      </div>
      <hr className="bg-darkGrayishBlue"/>
      <div className="header-toggle d-flex justify-content-between">
        <strong className={`mr-3 ${(light)? 'text-grayishBlue' : 'text-lwhite'}`}>Dark Mode</strong>
        <label className="switch">
          <input 
          type="checkbox"
          onChange={e => {
            setLight(!light);
          }}
          defaultChecked={light}
           />
          <span className="slider round "></span>
        </label>
      </div>
    </header>
  );
}

export default Header;