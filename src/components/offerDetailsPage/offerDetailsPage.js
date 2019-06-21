import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Hero from 'components/hero/hero';
import { MobileOfferExpirationTimer, OfferExpirationTimer } from 'components/offerExpirationTimer/offerExpirationTimer';
import StudioInfo from 'components/studioInfo/studioInfo';
import PaymentField from 'components/paymentField/paymentField';
import Button from 'components/button/button';
import { $white } from 'styles/colors';
import DataContext from '../data';

function OfferDetailsPage() {
  const {
    classTitle,
    classQuantity,
    actualPrice,
    retailPrice,
    discount,
    durationValid,
    pricePerClass,
    imageUrl,
    dateOfExpiration,
    studioDescription,
    locations,
  } = useContext(DataContext);
  const [isPaymentFieldVisible, setIsPaymentFieldVisible] = useState(false);

  const OfferDetailsPageWrapper = styled.div`
    padding-bottom: ${isPaymentFieldVisible ? '16px' : '96px'};
  `;

  return (
    <OfferDetailsPageWrapper>
      <Hero
        classTitle={classTitle}
        classQuantity={classQuantity}
        actualPrice={actualPrice}
        retailPrice={retailPrice}
        discount={discount}
        durationValid={durationValid}
        pricePerClass={pricePerClass}
        imageUrl={imageUrl}
        isPaymentFieldVisible={isPaymentFieldVisible}
        setIsPaymentFieldVisible={setIsPaymentFieldVisible}
      />
      <OfferExpirationTimer dateOfExpiration={dateOfExpiration} />
      {
        isPaymentFieldVisible
          ? (
            <PaymentField
              retailPrice={retailPrice}
              discount={discount}
              tax={11.99}
              setIsPaymentFieldVisible={setIsPaymentFieldVisible}
            />
          )
          : (
            <StudioInfo
              locations={locations}
              studioDescription={studioDescription}
            />
          )
      }

      {!isPaymentFieldVisible
        && (
        <MobileStickyFooter
          dateOfExpiration={dateOfExpiration}
          setIsPaymentFieldVisible={setIsPaymentFieldVisible}
        />
        )
      }
    </OfferDetailsPageWrapper>
  );
}

function MobileStickyFooter({ dateOfExpiration, setIsPaymentFieldVisible }) {
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
        text="buy now"
        isMobile
        onClickHandler={() => setIsPaymentFieldVisible(true)}
      >
        buy now
      </Button>
      <MobileOfferExpirationTimer dateOfExpiration={dateOfExpiration} />
    </MobileStickyFooterWrapper>
  );
}

export default OfferDetailsPage;
