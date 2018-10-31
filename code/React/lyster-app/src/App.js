import React, { Component } from 'react';
import './App.css';
import Toolbar from './Navigation/navigation';
import  Sidebar from '../src/Sidebar/sidebar-menu';
import Backdrop from '../src/backdrop/backdrop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Sidebar/>
       
        <main style={{marginTop:'2rem'}}>
          <p>This is the main content</p>
        </main>
        <Backdrop/>
      </div>
    );
  }
}

export default App;
