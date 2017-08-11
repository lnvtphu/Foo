import React, { Component } from 'react'
import ContainerImage from './ContainerImage'

class Viewer extends Component {
  onSend = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <div className='Viewer'>
        <ContainerImage />
      </div>
    )
  }
}
export default Viewer
