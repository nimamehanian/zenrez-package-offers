import React from 'react';
import styled from 'styled-components';
import { $green1, $white } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';

function Button({ text, isSecondary, isMobile, onClickHandler }) {
  const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${isSecondary ? $white : $green1};
  color: ${isSecondary ? $green1 : $white};
  height: 44px;
  width: 343px;
  border-radius: 6px;
  margin: ${isMobile ? '4px 0px' : '16px 0px'};
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
  ${isMobile
    ? '@media (max-width: 768px) { display: flex; }'
    : '@media (max-width: 767px) { display: none; }'}
  ${disableHighlight}
`;
  return (
    <ButtonWrapper onClick={onClickHandler}>
      {text}
    </ButtonWrapper>
  );
}

export default Button;
