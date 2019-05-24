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
    margin: 0px 4px;
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
      <B>{days}</B>
      {`${pluralize('day', days)},`}
      <B>{hours}</B>
      {`${pluralize('hour', hours)},`}
      <B>{minutes}</B>
      {`${pluralize('minute', minutes)}, and`}
      <B>{seconds}</B>
      {`${pluralize('second', seconds)}`}
    </OfferExpirationTimerWrapper>
  );
}

export default OfferExpirationTimer;
