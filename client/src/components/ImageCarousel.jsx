import React from 'react';
import ImageMagnify from './ImageMagnify.jsx';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.element.images[0],
      description: 'Image 1 of',
      description2: this.props.element.color,
    }
  
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      picture: e.target.value,
      description: e.target.alt,
      description2: e.target.id
    })
  }

  render() {
    return(
      <div className = "KL-photos">
        <div className = "KL-photos-container">
          <ImageMagnify picture = {this.state.picture}/>
          <div className="KL-carousel">
            <label className="KL-carousel-radio" htmlFor={this.props.element.description[0]}>
              <input type="radio" name="images" id={this.props.element.description[0]} alt="Image 1 of"  value={this.props.element.images[0]}  onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #c5c5c5", margin: "5px 5px 5px 0px"}}
                  src={this.props.element.images[0]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor={this.props.element.description[1]}>
              <input type="radio" name="images" id={this.props.element.description[1]} alt="Image 2 of" value={this.props.element.images[1]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #c5c5c5", margin: 5}}
                  src={this.props.element.images[1]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor={this.props.element.description[2]}>
              <input type="radio" name="images" id={this.props.element.description[2]}alt="Image 3 of" value={this.props.element.images[2]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #c5c5c5", margin: 5}}
                  src={this.props.element.images[2]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor={this.props.element.description[3]}>
              <input type="radio" name="images" id={this.props.element.description[3]}alt="Image 4 of" value={this.props.element.images[3]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #c5c5c5", margin: 5}}
                  src={this.props.element.images[3]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor={this.props.element.description[4]}>
              <input type="radio" name="images" id={this.props.element.description[4]} alt="Image 5 of" value={this.props.element.images[4]} onClick={this.handleChange}/>
                <img
                  className="KL-carousel-radio-img"
                  style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #c5c5c5", margin: 5}}
                  src={this.props.element.images[4]}/>
            </label>
            <label className="KL-carousel-radio" htmlFor={this.props.element.description[5]} >
                <input type="radio" name="images" id={this.props.element.description[5]} alt="Image 6 of " value={this.props.element.images[5]} onClick={this.handleChange}/>
                  <img
                    className="KL-carousel-radio-img"
                    style={{width: 107, height: 78, borderRadius: 5, border: "2px solid #c5c5c5", margin: "5px 0px 5px 5px"}}
                    src={this.props.element.images[5]}/>
            </label>
          </div>
          <div className = "KL-count-name-wrapper">
            <span className = "KL-image-count">
              {this.state.description} {this.props.element.images.length}:
            </span>
            <span className = "KL-image-name">
              {this.state.description2}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageCarousel;