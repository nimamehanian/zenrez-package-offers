import React, { Component } from 'react';
import styled from 'styled-components';
import { Elements, CardElement, injectStripe } from 'react-stripe-elements';
import { $text1 } from 'styles/colors';
import Button from 'components/button/button';
import Checkbox from '@material-ui/core/Checkbox';

function PaymentField({
  retailPrice,
  discount,
  tax,
  setIsPaymentFieldVisible,
}) {
  const PaymentFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 24px;
    section {
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;
    }
  `;

  const CCInfo = styled.div`
    width: 320px;
    min-height: 120px;
    margin: 0px 24px 24px;
    display: flex;
    flex-direction column;
    justify-content: space-between;
  `;

  const Cost = styled(CCInfo)``;

  const SaveCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const Title = styled.div`
    font-family: 'Apercu Med';
    text-transform: uppercase;
    margin-bottom: 8px;
  `;

  const Items = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.6;
  `;

  const costs = (() => {
    const disc = 0.01 * discount * retailPrice;
    const priceAfterDiscount = retailPrice - disc;
    // `t` is tax; ESLint complains that `tax` is defined in the surrounding scope
    const t = (retailPrice - (0.01 * discount * retailPrice)) * (0.01 * tax);
    const total = priceAfterDiscount + t;

    return {
      price: `$${retailPrice.toFixed(2)}`,
      discount: `- $${disc.toFixed(2)}`,
      tax: `$${t.toFixed(2)}`,
      total: `$${total.toFixed(2)}`,
    };
  })();

  class CreditCardFormClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isCardSaved: true,
      };
      this.chargeCard = this.chargeCard.bind(this);
    }

    async chargeCard(event) {
      const { stripe } = this.props;
      event.preventDefault();
      console.log('SUBMITTING');
      const token = await stripe.createToken();
      console.log(token);
    }

    render() {
      const { isCardSaved } = this.state;
      return (
        <div>
          <section>
            <CCInfo>
              <Title>payment</Title>
              <CardElement
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
              <SaveCard>
                <Checkbox
                  color="default"
                  checked={isCardSaved}
                  onChange={() => this.setState({ isCardSaved: !isCardSaved })}
                />
                <span>Save this card for future purchases</span>
              </SaveCard>
            </CCInfo>
            <Cost>
              <Title>cost</Title>
              <Items>
                <Item>
                  <span>Price</span>
                  <span>{costs.price}</span>
                </Item>
                <Item>
                  <span>{`Discount (${discount}%)`}</span>
                  <span style={{ opacity: 0.65 }}>{costs.discount}</span>
                </Item>
                <Item>
                  <span>{`Tax (${tax}%)`}</span>
                  <span>{costs.tax}</span>
                </Item>
                <Item
                  style={{
                    borderTop: '1px solid rgba(82, 95, 127, 0.3)',
                    paddingTop: '8px',
                    marginTop: '8px',
                    fontSize: '18px',
                  }}
                >
                  <span>Total</span>
                  <span style={{ fontWeight: 'bold' }}>{costs.total}</span>
                </Item>
              </Items>
            </Cost>
          </section>
          <section>
            <Button
              text="cancel"
              isSecondary
              style={{ margin: '16px 8px' }}
              onClickHandler={() => setIsPaymentFieldVisible(false)}
            />
            <Button
              text="buy now"
              style={{ margin: '16px 8px' }}
              onClickHandler={this.chargeCard}
            />
          </section>
        </div>
      );
    }
  }

  const CreditCardForm = injectStripe(CreditCardFormClass);

  return (
    <PaymentFieldWrapper>
      <Elements>
        <CreditCardForm />
      </Elements>
    </PaymentFieldWrapper>
  );
}

export default PaymentField;
