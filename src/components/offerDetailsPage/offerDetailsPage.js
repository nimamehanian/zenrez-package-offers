import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from 'components/hero/hero';
import { MobileOfferExpirationTimer, OfferExpirationTimer } from 'components/offerExpirationTimer/offerExpirationTimer';
import StudioInfo from 'components/studioInfo/studioInfo';
import PaymentField from 'components/paymentField/paymentField';
import Button from 'components/button/button';
import { $white } from 'styles/colors';

function OfferDetailsPage() {
  const [isPaymentFieldVisible, setIsPaymentFieldVisible] = useState(false);

  const OfferDetailsPageWrapper = styled.div`
    padding-bottom: ${isPaymentFieldVisible ? '16px' : '96px'};
  `;

  return (
    <OfferDetailsPageWrapper>
      <Hero
        isPaymentFieldVisible={isPaymentFieldVisible}
        setIsPaymentFieldVisible={setIsPaymentFieldVisible}
      />
      <OfferExpirationTimer />
      {
        isPaymentFieldVisible
          ? (
            <PaymentField
              setIsPaymentFieldVisible={setIsPaymentFieldVisible}
            />
          )
          : <StudioInfo />
      }

      {!isPaymentFieldVisible
        && (
        <MobileStickyFooter
          setIsPaymentFieldVisible={setIsPaymentFieldVisible}
        />
        )
      }
    </OfferDetailsPageWrapper>
  );
}

function MobileStickyFooter({ setIsPaymentFieldVisible }) {
  const MobileStickyFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 96px;
    background: ${$white};
    box-shadow: 0px -4px 14px -6px rgba(50, 50, 93, 0.25), 0px -4px 8px -8px rgba(0, 0, 0, 0.3);
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    @media (min-width: 768px) {
      display: none;
    }
  `;

  return (
    <MobileStickyFooterWrapper>
      <Button
        isMobile
        text="buy now"
        onClickHandler={() => setIsPaymentFieldVisible(true)}
      >
        buy now
      </Button>
      <MobileOfferExpirationTimer />
    </MobileStickyFooterWrapper>
  );
}

export default OfferDetailsPage;
