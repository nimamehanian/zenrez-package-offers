import React from 'react';
import styled from 'styled-components';
import { Image, MobileBadge, PricingInfo } from 'components/hero/heroSubcomponents';
import { $slate, $text1 } from 'styles/colors';

function Hero({
  isPaymentFieldVisible,
  setIsPaymentFieldVisible,
}) {
  const HeroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    position: relative;
    background: ${$slate};
    color: ${$text1};
    padding: 24px 0px;
    @media (max-width: 767px) {
      padding: 24px 0px 0px;
    }
  `;

  return (
    <HeroWrapper>
      <Image />
      <PricingInfo
        isPaymentFieldVisible={isPaymentFieldVisible}
        setIsPaymentFieldVisible={setIsPaymentFieldVisible}
      />
      <MobileBadge />
    </HeroWrapper>
  );
}

export default Hero;
