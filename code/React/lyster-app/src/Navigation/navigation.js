import React from 'react';
import './navigation.css';
import ToggleButton from '../Sidebar/toggle-button';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <ToggleButton/>
            </div>
          <div className="toolbar-logo"><a href="/">LYSTER</a></div>
         
          <div className="toolbar-items">
              <ul >
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Products</a></li>
                  <li><a href="/">Contact</a></li>
              </ul>
          </div>
        </nav>
    </header>
);
export default toolbar;
