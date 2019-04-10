import React, { Component } from 'react'
import OrderIist from './../OrederList'
import Header from './../Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OrderIist />
      </div>
    )
  }
}

export default App
