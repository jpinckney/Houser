import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';
import Header from './components/header/Header'
import House from './components/house/House'

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
