import React, { useContext } from 'react';
import styled from 'styled-components';
import DataContext from 'components/data';
import { $text1, $white } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';
import ArrowDown from 'icons/arrowDown';

function Header() {
  const { logoUrl, studioUrl, colors: { primary } } = useContext(DataContext);

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
      position: relative;
    `;

    const Title = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: color 0.15s ease;
      ion-icon {
        margin-left: 4px;
        position: relative;
        top: 1px;
      }
      &:hover {
        color: rgba(82, 95, 127, 0.7);
      }
      ${disableHighlight}
    `;

    const Menu = styled.div`
      position: absolute;
      top: 18px;
      right: 0px;
      z-index: 9;
      min-width: 144px;
      min-height: 96px;
      border-radius: 6px;
      padding: 6px 0px;
      box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
      background: ${$white};
      cursor: pointer;
    `;

    const MenuItem = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 32px;
      width: 216px;
      padding: 8px 0px 8px 8px;
      cursor: pointer;
      text-transform: capitalize;
      background: ${$white};
      transition: all 0.15s ease;
      &:hover {
        color: ${$white};
        background: ${primary};
      }
    `;

    const menuItems = [
      { text: 'my offer' },
      { text: 'account settings' },
      { text: 'membership & preferences' },
      { text: 'log out' },
    ];

    return (
      <DropdownWrapper>
        <Title>
          Account
          <ion-icon name="ios-arrow-down" />
        </Title>
        <Menu>
          {menuItems.map((item, idx) => (
            <MenuItem key={`item_${idx + 1}`}>{item.text}</MenuItem>
          ))}
        </Menu>
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
// <ArrowDown color={$text1} />
