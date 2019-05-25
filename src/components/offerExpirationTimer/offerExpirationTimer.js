import React, { useState } from 'react';
import styled from 'styled-components';
import { $white70 } from 'styles/colors';
import useInterval from 'utils/useInterval';

function OfferExpirationTimer({ dateOfExpiration }) {
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
    margin: ${({ width }) => (width < 500 ? '0px 0px 0px 4px' : '0px 4px')};
  `;

  const expiration = new Date(dateOfExpiration);
  const diff = () => expiration.getTime() - new Date().getTime();

  const [timeRemaining, setTimeRemaining] = useState(diff());
  useInterval(() => setTimeRemaining(diff()), 1000);

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  const days = Math.floor(timeRemaining / oneDay);
  const hours = Math.floor((timeRemaining % oneDay) / oneHour);
  const minutes = Math.floor((timeRemaining % oneHour) / oneMinute);
  const seconds = Math.floor((timeRemaining % oneMinute) / oneSecond);

  const pluralize = (unit, value) => (value === 1 ? unit : `${unit}s`);

  return (
    <OfferExpirationTimerWrapper>
      Offer expires in
      <B width={window.innerWidth}>{days}</B>
      {`${window.innerWidth < 500 ? 'd' : pluralize('day', days)},`}
      <B width={window.innerWidth}>{hours}</B>
      {`${window.innerWidth < 500 ? 'h' : pluralize('hour', hours)},`}
      <B width={window.innerWidth}>{minutes}</B>
      {`${window.innerWidth < 500 ? 'm' : pluralize('minute', minutes)}, and`}
      <B width={window.innerWidth}>{seconds}</B>
      {`${window.innerWidth < 500 ? 's' : pluralize('second', seconds)}`}
    </OfferExpirationTimerWrapper>
  );
}

export default OfferExpirationTimer;
