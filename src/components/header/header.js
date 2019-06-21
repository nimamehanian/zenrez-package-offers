import React, { useContext } from 'react';
import { $text1, $white } from 'styles/colors';
import styled from 'styled-components';
import DataContext from 'components/data';

function Header() {
  const { logoUrl, studioUrl } = useContext(DataContext);

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
        <img src={logoUrl} alt="logo" height={32} />
      </a>
    </HeaderWrapper>
  );
}

export default Header;
