import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';
import Header from './components/header/Header'
import House from './components/house/House'
import Routes from './routes'
import { Link } from 'react-router-dom'

class App extends Component {




componentDidMount(){}



  render() {
    return (
      <div>
        <nav>
          <Header />
          <Link to='/'>Dashboard</Link>
          <div>
            <House />
            <Link to='/wizard'>Wizard</Link>
          </div>
        </nav>
        { Routes }
      </div>
    );
  }
}

export default App;
