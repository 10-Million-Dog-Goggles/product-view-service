import React from 'react';
import FreeShipping from './FreeShipping.jsx';
import ReturnPolicy from './ReturnPolicy.jsx';
import FindStore from './FindStore.jsx';
import AddToCart from './AddToCart.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import BreadCrumbs from './BreadCrumbs.jsx';

class DisplayEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  handleChange(e) {
    var numberBaby = parseInt(e.target.value);
    this.setState({
      [e.target.name]: numberBaby
    })
    console.log(this.state.quantity);
  }

  handleSubmit(e) {
    // var numberBaby = parseInt(e.target.value);
    e.preventDefault(e);
    this.handleChange(e);
    e.target.reset();
  }

  decrementQuantity() {
    if (this.state.quantity < 2) {
      this.setState({
        quantity: 1
      }) 
    } else {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
  }

  incrementQuantity() {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  render() {
    return( 
    <div className="test">
    <div className="KL-bread">
      <BreadCrumbs/>
    </div>
    <div className = "KL-main">
      <ImageCarousel element = {this.props.element}/>
      <div className = "KL-description">
        <div className = "KL-brand">
          {this.props.element.brand}
        </div>
        <div className = "KL-title">
          {this.props.element.name}  
        </div>
        <div className = "KL-review-item-wrapper">
          <div className = "KL-review-wrapper">
            <span className = "KL-review-stars">★★★★★</span>
            <span className ="KL-review">5.0 ({this.props.element.rating})</span>
          </div>
          <span className = "KL-item-number">Item# {this.props.element.item}</span>
        </div>
        <div className = "KL-price">
          <span>${this.props.element.price}</span> 
        </div>
        <div className = "KL-free-shipping">
          <FreeShipping/>
        </div>
        <div className = "KL-details-wrapper">
          <div className = "KL-specific-details-wrapper">
            <div className = "KL-color-text">
              Color: {this.props.element.color}
            </div>
            <div>
              <img 
              style={{width:50, height:40, border: "1px solid #6495ED", borderRadius: "5px"}}
              src={this.props.element.images[0]}
              />
            </div>
            <div className="KL-size-quantity-wrapper">
              <div className="KL-size">
                Size
              </div>
              <div className="KL-quantity">
                Quantity
              </div>
            </div>
            <div className="KL-size-quantity-wrapper2">
              <div className="KL-size-select">
                <select className="KL-size-edit">
                  <option className="KL-size-edit-option2" value="select size">Select Size</option>
                  <option className="KL-size-edit-option1" value="available">Available</option>
                  <option selected value="small">{this.props.element.size}</option>
                </select>
              </div>
              <div className="KL-quantity-change">
                <div className="KL-button-div" onClick={this.decrementQuantity}>
                  <img className="KL-button-decrement" src="https://rei.github.io/cedar-icons/icons/minus-lg.svg"/>
                </div>
                  <form onSubmit={this.handleSubmit}>
                    <input className="KL-quantity-input" name="quantity" value={this.state.quantity} onChange={this.handleChange}></input>
                  </form>
                <div className="KL-button-div" onClick={this.incrementQuantity}>
                  <img className="KL-button-increment" src="https://rei.github.io/cedar-icons/icons/plus-lg.svg"/>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <hr className="KL-hr"></hr>
        <div className = "KL-shipping-wrapper">
          <div className = "KL-shipping">
            <input type="radio" className="KL-shipping-radio" name="shippingRadio" id="KL-shipping-radio-id"/>
            <label className="KL-shipping-cursor" htmlFor="KL-shipping-radio-id">Ship to address</label>
          </div>  
          <div className = "KL-pickup">
            <input type="radio" className="KL-pickup-radio" name="shippingRadio" id="KL-pickup-radio-id"/>
            <label className="KL-pickup-cursor" htmlFor="KL-pickup-radio-id">Pick up in store - Free</label>
          </div>
          <div className = "KL-store-near">
            <FindStore element={this.props.element}/>
          </div>
        </div>
        <div>
          <AddToCart element={this.props.element}/>
        </div>
        <div className = "KL-add-wrapper">
          <div className = "KL-wish-list">
            Add to wish list
          </div>
          <div className = "KL-registry">
            Add to registry
          </div>
        </div>
        <div className = "KL-return-wrapper">
          <div className = "KL-return">
            <ReturnPolicy/>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}

export default DisplayEntry