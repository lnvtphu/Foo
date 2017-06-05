import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io()

class Index extends Component {
  onSend = (e) => {
    e.preventDefault()
    const { word } = this.state
    socket.emit('send:message', word)
    console.log(word.value)
  }

  render() {
    return (
      <div>
        <input
          type='text'
          ref={ (word) => { this.setState({ word }) } } />
        <button onClick={ this.onSend } >Send</button>
      </div>
    )
  }
}

export default Index
