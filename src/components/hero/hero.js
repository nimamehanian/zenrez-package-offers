import React from 'react';
import styled from 'styled-components';
import {
  Image
} from 'components/hero/heroSubcomponents';
import {
  $slate,
  $text1,
  $green1,
  $white
} from 'styles/colors';

function Hero({
  classTitle,
  classQuantity,
  actualPrice,
  retailPrice,
  discount,
  pricePerClass,
  imageUrl,
}) {
  const HeroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    background: ${$slate};
    color: ${$text1};
    padding: 24px 0px;
  `;

  function PricingInfo() {
    const PricingInfoWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 320px;
    `;

    function ClassTitle({ name }) {
      const ClassTitleWrapper = styled.div`
        font-size: 24px;
        text-transform: uppercase;
      `;

      return (
        <ClassTitleWrapper>
          {name}
        </ClassTitleWrapper>
      );
    }

    function PackageQuantity({ qty }) {
      const PackageQuantityWrapper = styled.div`
        font-size: 36px;
      `;

      return (
        <PackageQuantityWrapper>
          {`${qty} classes`}
        </PackageQuantityWrapper>
      );
    }

    function Prices({ actual, retail }) {
      const PricesWrapper = styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 50%;
      `;

      const Actual = styled.div`
        font-size: 72px;
      `;

      const Retail = styled.div`
        position: relative;
        top: -10px;
        color: ${$text1};
        font-size: 36px;
        opacity: 0.69;
      `;

      const Strikeout = styled.div`
        position: absolute;
        height: 2px;
        width: 90px;
        background: #f0617d;
        opacity: 0.8;
        transform: rotate(-15deg) translate3d(-9px, 20px, 0px);
      `;

      return (
        <PricesWrapper>
          <Actual>{`$${actual}`}</Actual>
          <Retail>
            <Strikeout />
            {`$${retail}`}
          </Retail>
        </PricesWrapper>
      );
    }

    const SavingsSummary = styled.div`
      font-size: 16px;
      span {
        color: ${$green1};
      }
    `;

    const Disclaimers = styled.div`
      font-size: 14px;
      margin-top: 24px;
      div {
        text-transform: uppercase;
        margin-bottom: 4px;
      }
    `;

    const BuyNowButton = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${$green1};
      color: ${$white};
      height: 44px;
      width: 343px;
      border-radius: 6px;
      margin: 16px 0px;
      font-size: 20px;
      letter-spacing: 0.62px;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
      &:hover {
        box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.08);
        transform: translateY(-1px);
      }
    `;

    return (
      <PricingInfoWrapper>
        <ClassTitle name={classTitle} />
        <PackageQuantity qty={classQuantity} />
        <Prices actual={actualPrice} retail={retailPrice} />
        <SavingsSummary>
          <span>{`Save ${discount}% `}</span>
          {`— $${pricePerClass}/class`}
        </SavingsSummary>
        <Disclaimers>
          <div>custom offer</div>
          <span>Package expires 6 months after purchase</span>
        </Disclaimers>
        <BuyNowButton onClick={() => console.log('BUY NOW')}>buy now</BuyNowButton>
      </PricingInfoWrapper>
    );
  }

  return (
    <HeroWrapper>
      <Image imageUrl={imageUrl} discount={discount} />
      <PricingInfo pricePerClass={pricePerClass} />
    </HeroWrapper>
  );
}

export default Hero;
