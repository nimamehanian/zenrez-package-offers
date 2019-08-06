import React from 'react';
import styled from 'styled-components';
import { MobileOfferExpirationTimer } from 'components/offerExpirationTimer/offerExpirationTimer';
import Button from 'components/button/button';
import { $white } from 'styles/colors';

function MobileStickyFooter({ setIsPaymentFieldVisible, primaryColor, dateOfExpiration }) {
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
        primaryColor={primaryColor}
        onClickHandler={() => setIsPaymentFieldVisible(true)}
      >
        buy now
      </Button>
      <MobileOfferExpirationTimer dateOfExpiration={dateOfExpiration} />
    </MobileStickyFooterWrapper>
  );
}

export default MobileStickyFooter;
