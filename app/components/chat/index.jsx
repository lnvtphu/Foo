import React, { Component } from 'react'

class Index extends Component {
  onSend = (e) => {
    e.preventDefault()
    const { word } = this.state
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
