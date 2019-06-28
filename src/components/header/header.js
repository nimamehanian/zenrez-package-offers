import React, { useContext } from 'react';
import styled from 'styled-components';
import DataContext from 'components/data';
import { $text1, $white } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';
import ArrowDown from 'icons/arrowDown';

function Header() {
  const { logoUrl, studioUrl } = useContext(DataContext);

  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${$white};
    color: ${$text1};
    height: 72px;
    padding: 0px 24px;
    img {
      height: 38px;
    }
  `;

  function Dropdown() {
    const DropdownWrapper = styled.div`

    `;

    const Title = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      svg {
        height: 19px;
        margin-left: 4px;
        position: relative;
        top: 1px;
      }
      &:hover {
        color: rgba(82, 95, 127, 0.7);
        path {
          fill: rgba(82, 95, 127, 0.7);
        }
      }
      ${disableHighlight}
    `;

    return (
      <DropdownWrapper>
        <Title>
          Account
          <ArrowDown color={$text1} />
        </Title>
      </DropdownWrapper>
    );
  }

  return (
    <HeaderWrapper>
      <a href={studioUrl} target="_blank" rel="noopener noreferrer">
        <img src={logoUrl} alt="logo" />
      </a>
      <Dropdown />
    </HeaderWrapper>
  );
}

export default Header;
