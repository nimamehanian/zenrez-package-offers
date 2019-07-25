import React, { Component } from 'react';
import styled from 'styled-components';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { $text1 } from 'styles/colors';

class PayWithStripe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { setIsCardValid } = this.props;

    const CardWrapper = styled.div`
      padding: 8px;
      border-radius: 8px;
      border: 1px solid rgba(82, 95, 127, 0.2);
    `;

    return (
      <CardWrapper>
        <CardElement
          onChange={({ complete, error }) => setIsCardValid(complete && !error)}
          style={{
            base: {
              fontSize: '16px',
              color: $text1,
              '::placeholder': {
                color: $text1,
              },
            },
          }}
        />
      </CardWrapper>
    );
  }
}

export default injectStripe(PayWithStripe);
