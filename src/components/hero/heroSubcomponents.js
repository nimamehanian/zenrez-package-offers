import React, { useContext } from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import { $text1, $white } from 'styles/colors';
import Button from 'components/button/button';
import { DataContext } from 'components/data';
import { disableHighlight } from 'styles/mixins';

export function PricingInfo({
  isPaymentFieldVisible,
  setIsPaymentFieldVisible,
}) {
  const {
    colors: { primary },
    classTitle,
    classQuantity,
    actualPrice,
    retailPrice,
    pricePerClass,
    discount,
    durationValid,
  } = useContext(DataContext);

  const PricingInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 767px) {
      justify-content: center;
      margin-bottom: 24px;
    }
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
      color: ${primary};
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

  const components = [
    <ClassTitle name={classTitle} />,
    <PackageQuantity qty={classQuantity} />,
    <Prices actual={actualPrice} retail={retailPrice} />,
    <SavingsSummary>
      <span>{`Save ${discount}% `}</span>
      {`— $${pricePerClass}/class`}
    </SavingsSummary>,
    <Disclaimers>
      <div>custom offer</div>
      <span>{`Package expires ${durationValid} after purchase`}</span>
    </Disclaimers>,
    <span>
      {!isPaymentFieldVisible && (
        <Button
          text="buy now"
          onClickHandler={() => setIsPaymentFieldVisible(true)}
          hideOnMobile
        >
          buy now
        </Button>
      )}
    </span>,
  ];

  const trail = useTrail(components.length, {
    config: { mass: 3, tension: 4000, friction: 130 },
    from: { opacity: 0, yPos: 16 },
    opacity: 1,
    yPos: 0,
  });

  return (
    <PricingInfoWrapper>
      {trail.map(({ opacity, yPos }, idx) => (
        <animated.div
          key={`item_${idx + 1}`}
          style={{ opacity, transform: yPos.interpolate(y => `translate3d(0, ${y}px, 0)`) }}
        >
          {components[idx]}
        </animated.div>
      ))}
    </PricingInfoWrapper>
  );
}

export function MobileBadge() {
  const { discount, colors: { primary } } = useContext(DataContext);

  const BadgeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    background: ${primary};
    color: ${$white};
    font-size: 16px;
    line-height: 1;
    position: absolute;
    top: 24px;
    right: 24px;
    @media (min-width: 768px) {
      display: none;
    }
    div {
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    ${disableHighlight}
  `;

  return (
    <BadgeWrapper>
      {`${discount}%`}
      <div>off</div>
    </BadgeWrapper>
  );
}

function Badge() {
  const { discount, colors: { primary } } = useContext(DataContext);

  const BadgeWrapper = styled.div`
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
    background: ${primary};
    color: ${$white};
    font-size: 16px;
    line-height: 1;
    @media (max-width: 767px) {
      display: none;
    }
    div {
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    ${disableHighlight}
  `;

  return (
    <BadgeWrapper>
      {`${discount}%`}
      <div>off</div>
    </BadgeWrapper>
  );
}

export function Image() {
  const { discount, imageUrl } = useContext(DataContext);

  const ImageWrapper = styled.div`
    position: relative;
  `;

  const Frame = styled.div`
    background: center center no-repeat url(${imageUrl});
    background-size: cover;
    @media (min-width: 768px) {
      border-radius: 6px;
      width: 280px;
      height: 320px;
      margin-right: 32px;
    }
    @media (max-width: 767px) {
      border-radius: 0px;
      width: 100vw;
      height: 420px;
    }
  `;

  return (
    <ImageWrapper>
      <Badge discount={discount} />
      <Frame />
    </ImageWrapper>
  );
}
