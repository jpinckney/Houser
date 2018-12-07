import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
    this.updateNameInput.props = this.updateNameInput.bind(this)
    this.updateAddressInput.props = this.updateAddressInput.bind(this)
    this.updateCityInput.props = this.updateCityInput.bind(this)
    this.updateStateInput.props = this.updateStateInput.bind(this)
    this.updateZipInput.props = this.updateZipInput.bind(this)
  }

  updateNameInput(event) {
    this.setState({
      name: event.target.value
    })
  }
  updateAddressInput(event) {
    this.setState({
      address: event.target.value
    })
  }
  updateCityInput(event) {
    this.setState({
      city: event.target.value
    })
  }
  updateStateInput(event) {
    this.setState({
      state: event.target.value
    })
  }
  updateZipInput(event) {
    this.setState({
      zip: event.target.value
    })
  }


  render() {
    return (
      <div>
        <Link to='/'>
          <button>Cancel</button>
        </Link>
        <input onChange={ event => this.updateNameInput(event) } placeholder='Name'></input>
        <input onChange={ event => this.updateAddressInput(event) } placeholder='Address'></input>
        <input onChange={ event => this.updateCityInput(event) } placeholder='City'></input>
        <input onChange={ event => this.updateStateInput(event) } placeholder='State'></input>
        <input onChange={ event => this.updateZipInput(event) } placeholder='Zip'></input>
      </div>
    )
  }
}
