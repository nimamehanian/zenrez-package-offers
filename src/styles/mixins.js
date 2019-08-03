import styled from 'styled-components';

export const tikTokTextEffect = `
  font-size: 64px;
  text-shadow: -4px -2px 0px cyan, 4px 2px 0px red;
  color: #fff;
  background: #232323;
`;

export const disableHighlight = `
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 8;
  display: ${({ isRendered }) => (isRendered ? 'block' : 'none')}
`;
