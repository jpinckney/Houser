import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    }
  }

  render() {
    // return this.props.houses.map() => { }
    return (
      <div>
        <Link to='/wizard'>
          <button>Add New Property</button>
        </Link>
      </div>
    )
  }
}
