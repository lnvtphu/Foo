import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3005/')

class Index extends Component {
  onSend = (e) => {
    e.preventDefault()
    const { word } = this.state
    socket.emit('send:message', word)
  }
  onCocCoc = (e) => {
    const {
      target: {
        value
      }
    } = e
    this.setState({ word: value })
    console.log(value)
  }
  render() {
    return (
      <div>
        <input
          type='text'
          onChange={ (e) => this.onCocCoc(e) } />
        <button onClick={ this.onSend } >Send</button>
      </div>
    )
  }
}

export default Index
