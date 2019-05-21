import React from 'react';
import styled from 'styled-components';
import {
  $slate,
  $text1,
  $green1,
  $white
} from 'styles/colors';

import classPhoto from 'images/class_pic.png';

function Hero() {
  const HeroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 360px;
    background: ${$slate};
    color: ${$text1};
    img {
      border-radius: 6px;
      margin-right: 32px;
    }
  `;

  function Image({ image, discount }) {
    const ImageWrapper = styled.div`
      position: relative;
    `;

    const Badge = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      left: -32px;
      height: 64px;
      width: 64px;
      border-radius: 50%;
      background: ${$green1};
      color: ${$white};
      font-size: 16px;
      line-height: 1;
      div {
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    `;

    return (
      <ImageWrapper>
        <Badge>
          {`${discount}%`}
          <div>off</div>
        </Badge>
        <img src={image} alt="class" />
      </ImageWrapper>
    );
  }

  function PricingInfo() {
    const PricingInfoWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 320px;
    `;

    function ClassName({ name }) {
      const ClassNameWrapper = styled.div`
        font-size: 24px;
      `;

      return (
        <ClassNameWrapper>
          {name}
        </ClassNameWrapper>
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
      width: 388px;
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
        <ClassName name="YOGA" />
        <PackageQuantity qty={5} />
        <Prices actual={75} retail={100} />
        <SavingsSummary>
          <span>Save 25%&nbsp;</span>
          — $15/class
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
      <Image image={classPhoto} discount={25} />
      <PricingInfo />
    </HeroWrapper>
  );
}

export default Hero;
