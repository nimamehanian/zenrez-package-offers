import React from 'react';
import styled from 'styled-components';
import { $white70 } from 'styles/colors';

function OfferExpirationTimer() {
  const OfferExpirationTimerWrapper = styled.div`
    background: ${$white70};
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    margin-bottom: 24px;
  `;

  const B = styled.span`
    font-family: 'Apercu Med';
    margin: 0px 4px;
  `;

  return (
    <OfferExpirationTimerWrapper>
      Offer expires in
      <B>2</B>
      days,
      <B>23</B>
      hours,
      <B>53</B>
      minutes, and
      <B>25</B>
      seconds
    </OfferExpirationTimerWrapper>
  );
}

export default OfferExpirationTimer;
