import React from 'react';
import styled from 'styled-components';
import Hero from 'components/hero/hero';
import { MobileOfferExpirationTimer, OfferExpirationTimer } from 'components/offerExpirationTimer/offerExpirationTimer';
import StudioInfo from 'components/studioInfo/studioInfo';
import { BuyNowButton } from 'components/hero/heroSubcomponents';
import { $white } from 'styles/colors';

function MobileStickyFooter({ dateOfExpiration }) {
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

  const MobileBuyNowButton = styled(BuyNowButton)`
    margin: 4px 0px;
    @media (max-width: 768px) {
      display: flex;
    }
  `;

  return (
    <MobileStickyFooterWrapper>
      <MobileBuyNowButton
        onClick={() => console.log('BUY NOW')}
      >
        buy now
      </MobileBuyNowButton>
      <MobileOfferExpirationTimer dateOfExpiration={dateOfExpiration} />
    </MobileStickyFooterWrapper>
  );
}

function OfferDetailsPage({ data }) {
  const {
    classTitle,
    classQuantity,
    actualPrice,
    retailPrice,
    discount,
    pricePerClass,
    imageUrl,
    dateOfExpiration,
    studioDescription,
    locations,
  } = data;

  const OfferDetailsPageWrapper = styled.div`
    padding-bottom: 96px;
  `;

  return (
    <OfferDetailsPageWrapper>
      <Hero
        classTitle={classTitle}
        classQuantity={classQuantity}
        actualPrice={actualPrice}
        retailPrice={retailPrice}
        discount={discount}
        pricePerClass={pricePerClass}
        imageUrl={imageUrl}
      />
      <OfferExpirationTimer dateOfExpiration={dateOfExpiration} />
      <StudioInfo
        locations={locations}
        studioDescription={studioDescription}
      />
      <MobileStickyFooter dateOfExpiration={dateOfExpiration} />
    </OfferDetailsPageWrapper>
  );
}

export default OfferDetailsPage;
