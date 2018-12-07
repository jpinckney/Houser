import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wizard />
        <div>
          <Dashboard />
          <House />
        </div>
      </div>
    );
  }
}

export default App;
