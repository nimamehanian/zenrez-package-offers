import React from 'react';
import { $text1, $white } from 'styles/colors';
import styled from 'styled-components';

function Header() {
  const HeaderWrapper = styled.div`
    background: ${$white};
    color: ${$text1};
    height: 72px;
    font-size: 24px;
    line-height: 3;
    padding: 0px 8px;
  `;

  return (
    <HeaderWrapper />
  );
}

export default Header;
