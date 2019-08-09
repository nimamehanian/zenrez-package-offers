import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $grey3, $white } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';

function Button({
  text,
  primaryColor,
  onClickHandler,
  hideOnMobile,
  isMobile,
  isSecondary,
  disabled,
  style,
}) {
  const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${disabled ? $grey3 : (isSecondary ? $white : primaryColor)};
    color: ${disabled ? $white : (isSecondary ? primaryColor : $white)};
    height: 44px;
    width: 343px;
    border-radius: 6px;
    margin: ${isMobile ? '4px 0px' : '16px 0px'};
    font-size: 20px;
    letter-spacing: 0.62px;
    text-transform: uppercase;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.15s ease;
    &:hover {
      ${disabled ? '' : `
        box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.11), 0px 3px 6px rgba(0, 0, 0, 0.08);
        transform: translateY(${disabled ? '0px' : '-1px'});
      `}
    }
    ${disableHighlight}
    ${hideOnMobile ? '@media (max-width: 767px) { display: none; }' : ''}
`;
  return (
    <ButtonWrapper onClick={disabled ? () => {} : onClickHandler} style={style}>
      {text}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  onClickHandler: () => {},
  hideOnMobile: false,
  isMobile: false,
  isSecondary: false,
  disabled: false,
  style: {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  hideOnMobile: PropTypes.bool,
  isMobile: PropTypes.bool,
  isSecondary: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;
