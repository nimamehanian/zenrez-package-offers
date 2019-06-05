import React from 'react';
import styled from 'styled-components';
import Button from 'components/button/button';

function PaymentField({ retailPrice, discount, tax }) {
  const PaymentFieldWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    margin-top: 24px;
  `;

  const CCInfo = styled.div`
    width: 375px;
    margin: 0px 24px 24px;
  `;

  const Cost = styled(CCInfo)``;

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
    const t = (retailPrice - (0.01 * discount * retailPrice)) * (0.01 * tax);
    const total = priceAfterDiscount + t;

    return {
      price: `$${retailPrice.toFixed(2)}`,
      discount: `- $${disc.toFixed(2)}`,
      tax: `$${t.toFixed(2)}`,
      total: `$${total.toFixed(2)}`,
    };
  })();

  return (
    <PaymentFieldWrapper>
      <div>
        <CCInfo>
          <Title>payment</Title>
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
      </div>
      <div>
        <Button text="cancel" isSecondary />
        <Button text="buy now" />
      </div>
    </PaymentFieldWrapper>
  );
}

export default PaymentField;
