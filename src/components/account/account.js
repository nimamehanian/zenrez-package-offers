import React, { createRef, Component } from 'react';
import { Elements, CardElement } from 'react-stripe-elements';
import { Spring, animated } from 'react-spring/renderprops';
import styled from 'styled-components';
import UserContext from 'components/userData';
import {
  AccountWrapper,
  AccountCard,
  SectionTitle,
  Header,
  AccountFieldGroup,
  Fields,
  FieldGroup,
  Field
} from 'components/account/accountSubcomponents';
import {
  ActionBtn,
  SecondaryBtn
} from 'components/membership/membershipSubcomponents';
import { $text1, $blue } from 'styles/colors';

const PaymentFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  margin-top: 0px;
  width: 100%;
`;

const CardWrapper = styled(animated.div)`
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid rgba(82, 95, 127, 0.2);
  min-width: 293px;
`;

const Options = styled(animated.div)`
  display: flex;
`;
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentFieldVisible: false,
      isCardValid: false,
    };
    this.setIsPaymentFieldVisible = this.setIsPaymentFieldVisible.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.stripeCardInput = createRef();
  }

  setIsPaymentFieldVisible(isPaymentFieldVisible) {
    const { focus, clear } = this.stripeCardInput.current._element;
    isPaymentFieldVisible ? focus() : clear();
    this.setState({ isPaymentFieldVisible });
  }

  async saveCard(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    const { isCardValid, isPaymentFieldVisible } = this.state;
    return (
      <UserContext.Consumer>
        {({
          firstName,
          lastName,
          email,
          phoneNumber,
        }) => (
          <AccountWrapper>
            <SectionTitle>account overview</SectionTitle>
            <div>
              <AccountCard>
                <Header>profile</Header>
                <Fields>
                  <AccountFieldGroup>
                    <Field label="First Name" value={firstName} />
                    <Field label="Last Name" value={lastName} />
                  </AccountFieldGroup>
                  <AccountFieldGroup>
                    <Field label="Email" value={email} isOnlyFieldInGroup />
                  </AccountFieldGroup>
                  <AccountFieldGroup>
                    <Field label="Phone Number" value={phoneNumber} isOnlyFieldInGroup />
                  </AccountFieldGroup>
                </Fields>
              </AccountCard>
              <Spring
                native
                to={{
                  opacity: isPaymentFieldVisible ? 1 : 0,
                  offsetY: isPaymentFieldVisible ? 0 : -24,
                  btnOffset: isPaymentFieldVisible ? 0 : -43,
                  height: isPaymentFieldVisible ? 136 : 92,
                }}
                config={{ mass: 1, tension: 400, friction: 32 }}
              >
                {({
                  opacity,
                  offsetY,
                  btnOffset,
                  height,
                }) => (
                  <AccountCard style={{ height }}>
                    <Header>payment methods</Header>
                    <Fields>
                      <FieldGroup>
                        <PaymentFieldWrapper>
                          <Elements>
                            <CardWrapper
                              style={{
                                opacity,
                                transform: offsetY.interpolate(y => `translateY(${y}px)`),
                                willChange: 'transform, opacity',
                              }}
                            >
                              <CardElement
                                ref={this.stripeCardInput}
                                onChange={({ complete, error }) => (
                                  this.setState({ isCardValid: complete && !error })
                                )}
                                hideIcon={!isPaymentFieldVisible}
                                hidePostalCode
                                style={{
                                  base: {
                                    fontSize: '14px',
                                    color: !isPaymentFieldVisible ? '#fff' : $text1,
                                    '::placeholder': {
                                      color: !isPaymentFieldVisible ? '#fff' : $text1,
                                    },
                                  },
                                }}
                              />
                            </CardWrapper>
                          </Elements>
                          <Options style={{ transform: btnOffset.interpolate(y => `translateY(${y}px)`) }}>
                            {isPaymentFieldVisible && (
                              <SecondaryBtn onClick={() => (this.setIsPaymentFieldVisible(false))}>
                                cancel
                              </SecondaryBtn>
                            )}
                            <ActionBtn
                              onClick={event => (
                                isPaymentFieldVisible
                                  ? (isCardValid ? this.saveCard(event) : () => ({}))
                                  : this.setIsPaymentFieldVisible(true)
                              )}
                              style={{
                                cursor: isPaymentFieldVisible && isCardValid
                                  ? 'pointer'
                                  : (!isPaymentFieldVisible ? 'pointer' : 'not-allowed'),
                                color: isPaymentFieldVisible && isCardValid
                                  ? $blue
                                  : (!isPaymentFieldVisible ? $blue : 'rgba(82, 95, 127, 0.3)'),
                                background: isPaymentFieldVisible && !isCardValid ? 'none' : '',
                              }}
                            >
                              {isPaymentFieldVisible ? 'save card' : 'add payment method'}
                            </ActionBtn>
                          </Options>
                        </PaymentFieldWrapper>
                      </FieldGroup>
                    </Fields>
                  </AccountCard>
                )}
              </Spring>
            </div>
          </AccountWrapper>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Account;
