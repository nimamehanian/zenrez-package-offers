import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { $text1 } from 'styles/colors';
import useInterval from 'utils/useInterval';
import DataContext from 'components/data';

export function MobileOfferExpirationTimer() {
  const { dateOfExpiration } = useContext(DataContext);

  const B = styled.span`
    font-family: 'Apercu Med';
    margin-left: 4px;
    margin-right: ${({ width }) => (width < 500 ? '0px' : '4px')};
  `;

  const expiration = new Date(dateOfExpiration);
  const diff = () => expiration.getTime() - new Date().getTime();

  const [timeRemaining, setTimeRemaining] = useState(diff());
  useInterval(() => setTimeRemaining(diff()), (timeRemaining > 0 ? 1000 : null));

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
    <div>
      {
        timeRemaining > 0
          ? (
            <div>
              Offer expires in
              <B width={window.innerWidth}>{days}</B>
              {`${window.innerWidth < 500 ? 'd' : pluralize('day', days)},`}
              <B width={window.innerWidth}>{hours}</B>
              {`${window.innerWidth < 500 ? 'h' : pluralize('hour', hours)},`}
              <B width={window.innerWidth}>{minutes}</B>
              {`${window.innerWidth < 500 ? 'm' : pluralize('minute', minutes)}, and`}
              <B width={window.innerWidth}>{seconds}</B>
              {`${window.innerWidth < 500 ? 's' : pluralize('second', seconds)}`}
            </div>
          )
          : <div style={{ color: `${window.innerWidth < 500 ? '#ff6382' : $text1}` }}>Offer expired</div>
      }
    </div>
  );
}

export function OfferExpirationTimer() {
  const OfferExpirationTimerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    height: 48px;
    font-size: 16px;
    @media (max-width: 767px) {
      display: none;
    }
  `;
  // border-bottom: 1px solid rgba(82, 95, 127, 0.2);
  // margin-bottom: 0px;

  return (
    <OfferExpirationTimerWrapper>
      {MobileOfferExpirationTimer()}
    </OfferExpirationTimerWrapper>
  );
}
