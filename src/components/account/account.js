import React,
{
  useState,
  useEffect,
  useContext
} from 'react';
import { Elements, CardElement } from 'react-stripe-elements';
import { useSpring, animated } from 'react-spring';
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

function CreditCardInput({ isHidden, setIsCardValid }) {
  return (
    <CardElement
      onChange={({ complete, error }) => setIsCardValid(complete && !error)}
      hideIcon={isHidden}
      style={{
        base: {
          fontSize: '14px',
          color: isHidden ? '#fff' : $text1,
          '::placeholder': {
            color: isHidden ? '#fff' : $text1,
          },
        },
      }}
    />
  );
}

function Account() {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
  } = useContext(UserContext);
  const [isPaymentFieldVisible, setIsPaymentFieldVisible] = useState(false);
  const [isCardValid, setIsCardValid] = useState(false);

  const config = { mass: 1, tension: 400, friction: 36 };
  const [{ opacity }, setOpacity] = useSpring(() => ({ opacity: 0, config }));
  const [{ offsetY }, setOffsetY] = useSpring(() => ({ offsetY: 0, config }));
  const [{ btnOffset }, setBtnOffset] = useSpring(() => ({ btnOffset: 0, config }));
  const [{ height }, setHeight] = useSpring(() => ({ height: 92, config }));

  useEffect(() => {
    setOpacity({ opacity: isPaymentFieldVisible ? 1 : 0 });
    setOffsetY({ offsetY: isPaymentFieldVisible ? 0 : -24 });
    setBtnOffset({ btnOffset: isPaymentFieldVisible ? 0 : -43 });
    setHeight({ height: isPaymentFieldVisible ? 136 : 92 });
  }, [isPaymentFieldVisible]);

  async function saveCard(event) {
    event.preventDefault();
    console.log(event);
  }

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

  return (
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
                    <CreditCardInput
                      isHidden={!isPaymentFieldVisible}
                      setIsCardValid={setIsCardValid}
                    />
                  </CardWrapper>
                </Elements>
                <Options style={{ transform: btnOffset.interpolate(y => `translateY(${y}px)`) }}>
                  {isPaymentFieldVisible && (
                    <SecondaryBtn onClick={() => setIsPaymentFieldVisible(false)}>
                      cancel
                    </SecondaryBtn>
                  )}
                  <ActionBtn
                    onClick={event => (
                      isPaymentFieldVisible
                        ? (isCardValid ? saveCard(event) : () => ({}))
                        : setIsPaymentFieldVisible(true)
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
      </div>
    </AccountWrapper>
  );
}

export default Account;
