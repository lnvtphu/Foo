import React, { Component } from 'react'
import imageResolver from 'utils/image-resolver'

let DEFAUlT_IMAGE
if (process.env.BROWSER) {
  DEFAUlT_IMAGE = require('images/liuliu.png')
} else {
  DEFAUlT_IMAGE = imageResolver('images/liuliu.png')
}

class ContainerImage extends Component {
  state = {
    image: DEFAUlT_IMAGE
  }
  onSelectImage(e) {
    console.log(e.target.files[0])
  }

  render() {
    const { image } = this.state
    return (
      <div className='ContainerImage'>
        <div className='ContainerImage-Bar'>
          <span />
        </div>
        <div className='ContainerImage-WrapImage'>
          <input type='file' id='fileInput' multiple={ true } accept='image/*' onChange={ (e) => this.onSelectImage(e) } />
          <label htmlFor='fileInput'>
            <img alt='' src={ image } />
          </label>
        </div>
      </div>
    )
  }
}

export default ContainerImage
