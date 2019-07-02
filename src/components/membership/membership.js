import React from 'react';
import styled from 'styled-components';
import {
  AccountWrapper,
  SectionTitle,
  Section,
  Header,
  Fields,
  FieldGroup,
  Field
} from 'components/account/accountSubcomponents';

function Membership() {
  const MembershipWrapper = styled(AccountWrapper)``;

  return (
    <MembershipWrapper>
      <SectionTitle>MEMBERSHIP</SectionTitle>
      <div>
        <Section>
          <Header>YOGA - UNLIMITED</Header>
          <Fields>
            <FieldGroup>
              <Field label="Member Name" value="Nima Mehanian" />
              <Field label="Status" value="Active (as of 4/2/19)" />
            </FieldGroup>
            <FieldGroup>
              <Field label="Renewal Period" value="Monthly" />
              <Field label="Renewal Date" value="July 9th, 2019" />
              <Field label="Price" value="$200" />
            </FieldGroup>
          </Fields>
        </Section>

        <Section>
          <Header>PILATES - UNLIMITED</Header>
          <Fields>
            <FieldGroup>
              <Field label="Member Name" value="Nima Mehanian" />
              <Field label="Status" value="Inactive (as of 4/2/19)" />
            </FieldGroup>
            <FieldGroup>
              <Field label="Renewal Period" value="Monthly" />
              <Field label="Renewal Date" value="July 9th, 2019" />
              <Field label="Price" value="$200" />
            </FieldGroup>
          </Fields>
        </Section>
      </div>
    </MembershipWrapper>
  );
}

export default Membership;
