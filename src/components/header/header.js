import React from 'react';
import { $text1, $white } from 'styles/colors';
import styled from 'styled-components';

function Header({ logo }) {
  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${$white};
    color: ${$text1};
    height: 72px;
    font-size: 24px;
    line-height: 3;
    padding: 0px 16px;
  `;

  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" height={32} />
    </HeaderWrapper>
  );
}

export default Header;
