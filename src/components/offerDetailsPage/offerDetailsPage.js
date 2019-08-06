import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import Hero from 'components/hero/hero';
import { OfferExpirationTimer } from 'components/offerExpirationTimer/offerExpirationTimer';
import AuthForm from 'components/authForm/authForm';
import StudioInfo from 'components/studioInfo/studioInfo';
import PaymentField from 'components/paymentField/paymentField';
import MobileStickyFooter from 'components/mobileStickyFooter/mobileStickyFooter';

function OfferDetailsPage() {
  const [isPaymentFieldVisible, setIsPaymentFieldVisible] = useState(false);
  const {
    data: {
      offerDetails: {
        colors: { primary },
        classTitle,
        classQuantity,
        dateOfExpiration,
        actualPrice,
        retailPrice,
        tax,
        pricePerClass,
        discount,
        durationValid,
        imageUrl,
        locations,
        studioName,
        studioDescription,
      },
    },
  } = useQuery(gql`{
    offerDetails {
      colors { primary },
      classTitle,
      classQuantity,
      dateOfExpiration,
      actualPrice,
      retailPrice,
      tax,
      pricePerClass,
      discount,
      durationValid,
      imageUrl,
      locations {
        studioName,
        studioAddress,
        studioCityStateZip
      },
      studioName,
      studioDescription,
    }
  }`);

  const OfferDetailsPageWrapper = styled.div`
    padding-bottom: ${isPaymentFieldVisible ? '16px' : '96px'};
  `;

  return (
    <OfferDetailsPageWrapper>
      <Hero
        isPaymentFieldVisible={isPaymentFieldVisible}
        setIsPaymentFieldVisible={setIsPaymentFieldVisible}
        primaryColor={primary}
        classTitle={classTitle}
        classQuantity={classQuantity}
        actualPrice={actualPrice}
        retailPrice={retailPrice}
        pricePerClass={pricePerClass}
        discount={discount}
        durationValid={durationValid}
        imageUrl={imageUrl}
      />
      <OfferExpirationTimer dateOfExpiration={dateOfExpiration} />
      <AuthForm
        studioName={studioName}
        primaryColor={primary}
      />
      {
        isPaymentFieldVisible
          ? (
            <PaymentField
              setIsPaymentFieldVisible={setIsPaymentFieldVisible}
              discount={discount}
              retailPrice={retailPrice}
              tax={tax}
              primaryColor={primary}
            />
          )
          : (
            <StudioInfo
              studioDescription={studioDescription}
              locations={locations}
              primaryColor={primary}
            />
          )
      }
      {!isPaymentFieldVisible
        && (
          <MobileStickyFooter
            setIsPaymentFieldVisible={setIsPaymentFieldVisible}
            primaryColor={primary}
            dateOfExpiration={dateOfExpiration}
          />
        )
      }
    </OfferDetailsPageWrapper>
  );
}

export default OfferDetailsPage;
