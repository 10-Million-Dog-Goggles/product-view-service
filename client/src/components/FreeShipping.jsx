import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#product-view');

const customStyles = {
  content : {
    top                   : '10%',
    left                  : '30%',
    right                 : '30%',
    bottom                : 'auto',
  }
};


class FreeShipping extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  

  render () {
    var shippingStyle = {
      textDecoration: "none",
      color: "#3278AE",
      "margin": "10px 0px 10px 0px"
    }
    var returnStyle = {
      textDecoration: "none",
      color: "#3278AE",
      "margin": "10px 0px 10px 0px"
    }
  
    return (
      <div className = "KL-modal-wrapper">
        <span className = "KL-shipping-class" style={shippingStyle} onClick={this.handleOpenModal}>
          <img className="KL-shipping-bus" src="https://rei.github.io/cedar-icons/icons/bus.svg"/>
          This item ships for FREE!</span>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Free Shipping"
           style={customStyles}
           onRequestClose={this.handleCloseModal}
           ariaHideApp={true}
        >
          <div className="KL-x-modal" onClick={this.handleCloseModal}>
            <img className="KL-x-symbol" src="https://rei.github.io/cedar-icons/icons/x-lg.svg"/>
          </div>
          <div>
          <p className="KL-free-shipping-header">FREE U.S. STANDARD SHIPPING on orders of $50 or more including Skis and Snowboards.</p>
            <ul>
              <li>Offer valid 11/1/2019 12:01am – 2/1/2020 11:59pm PT.</li>
              <li>Offer valid only on orders placed at REI.com, REI Outlet and 1-800-426-4840.</li>
              <li>Offer not valid on return shipments, special orders, prior purchases, REI gift cards, memberships, shop services and rentals.</li>
              <li>Offer is limited to stock on hand and backorderable items, is nontransferable and is not redeemable for cash.</li>
              <li>Offer valid on all orders with a pre-tax subtotal of $50 or more; other discounts applied to your order could change your subtotal.</li>
              <li>Offer limited to standard shipping to U.S. addresses only (including APOs and FPOs).</li>
              <li>Oversized shipping charges for any heavy or large items other than skis or snowboards will be applied. These oversized shipping charges will be reflected at checkout</li>
              <li>Offer valid for free oversize shipping for skis, snowboards, Yeti, Otterbox, and RovR Coolers.</li>
              <li>To order by phone, call 1-800-426-4840 Mon-Fri, 5am through 10pm and Sat-Sun, 6am through 9pm PT.</li>
            </ul>
          <p><a href="" style={returnStyle}>Estimated arrival dates</a> are for domestic orders placed today. Estimated arrival dates are not guaranteed. Weather delays and other unforeseen circumstances may impact delivery time.</p>
          </div>
        </ReactModal>
      </div>
    );
  }
}


export default FreeShipping;