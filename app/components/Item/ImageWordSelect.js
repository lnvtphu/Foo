import React, { Component, PropTypes } from 'react'

class ImageWordSelect extends Component {
  static propTypes = {
    translate: PropTypes.string,
    words: PropTypes.array.isRequired
  }

  _buildListItem(items) {
    return items.map((item, index) => {
      <ItemImage 
        key={index}
        item={item}/>
    })
  }

  render() {
    const {
      translate = '',
      words = []
    } = this.props;

    return (
      <div>
        {this._buildListItem(words)}
      </div>
    )
  }

}

class ItemImage extends Component {
  render() {
    const {
        words,
        image
    } = this.props;
    return (
      <div style={{backgroundImage: `url(${image})`}}>
        <input/>
        <span>{word}</span>
      </div>
    ) 
  }
}

export default ImageWordSelect;
