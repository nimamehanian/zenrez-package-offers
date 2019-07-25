import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import PayWithStripe from './payWithStripe';

export default class PayWithStripeElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Elements>
        <PayWithStripe {...this.props} />
      </Elements>
    );
  }
}
