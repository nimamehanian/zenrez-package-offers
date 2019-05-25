import React from 'react';
import styled from 'styled-components';
import {
  $green1,
  $white
} from 'styles/colors';

export function Badge({ discount }) {
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
    background: ${$green1};
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
  `;

  return (
    <BadgeWrapper>
      {`${discount}%`}
      <div>off</div>
    </BadgeWrapper>
  );
}

export function Image({ imageUrl, discount }) {
  const ImageWrapper = styled.div`
    position: relative;
    img {
      @media (min-width: 768px) {
        border-radius: 6px;
        width: 280px;
        height: 320px;
        margin-right: 32px;
      }
      @media (max-width: 767px) {
        border-radius: 0px;
        width: 100%;
        height: 420px;
      }
    }
  `;

  return (
    <ImageWrapper>
      <Badge discount={discount} />
      <img src={imageUrl} alt="class_picture" />
    </ImageWrapper>
  );
}
