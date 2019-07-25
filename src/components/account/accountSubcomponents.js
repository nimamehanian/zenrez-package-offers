import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import {
  $slate,
  $text1,
  $white
} from 'styles/colors';

export const AccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${$slate};
  padding-top: 48px;
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
`;
// height: calc(100vh - 120px);

export const AccountCard = styled(animated.div)`
  background: ${$white};
  border: 1px solid rgba(82, 95, 127, 0.3);
  padding: 0px 16px 16px;
  margin-bottom: 32px;
  width: 311px;
  position: relative;
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  margin-right: 48px;
  min-width: 112px;
  display: flex;
  align-self: flex-start;
  @media (max-width: 767px) {
    min-width: 345px;
    margin-right: 0px;
    margin-bottom: 24px;
    align-self: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: capitalize;
  line-height: 3;
  letter-spacing: 0.6px;
  color: rgba(82, 95, 127, 0.6);
  border-bottom: 1px solid rgba(82, 95, 127, 0.3);
  margin-bottom: 16px;
`;

export const FieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const AccountFieldGroup = styled(FieldGroup)`
  justify-content: flex-start;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Field({ label, value, isOnlyFieldInGroup }) {
  const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 32px;
    margin-right: 32px;
    &:last-child {
      margin-right: 0px;
      text-align: ${isOnlyFieldInGroup ? 'left' : 'right'};
    }
  `;

  const Label = styled.div`
    font-size: 12px;
    color: rgba(82, 95, 127, 0.6);
  `;

  const Value = styled.div`
    font-size: 14px;
    color: ${$text1};
  `;

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </FieldWrapper>
  );
}
