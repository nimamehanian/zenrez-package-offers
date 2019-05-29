import React from 'react';
import { $text1, $white } from 'styles/colors';
import styled from 'styled-components';

function Header({ logo, studioUrl }) {
  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${$white};
    color: ${$text1};
    height: 72px;
    padding: 0px 16px;
  `;

  return (
    <HeaderWrapper>
      <a href={studioUrl} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="logo" height={32} />
      </a>
    </HeaderWrapper>
  );
}

export default Header;
