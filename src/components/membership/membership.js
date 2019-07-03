import React, { useContext } from 'react';
import UserContext from 'components/userData';
import styled from 'styled-components';
import {
  AccountWrapper,
  SectionTitle,
  Card,
  Header,
  Fields,
  FieldGroup,
  Field
} from 'components/account/accountSubcomponents';

function Membership() {
  const { memberships } = useContext(UserContext);
  const SectionWrapper = styled(AccountWrapper)``;

  return (
    <>
      <SectionWrapper>
        <SectionTitle>memberships</SectionTitle>
        <div className="membership-cards">
          {memberships.map(({
            title,
            memberName,
            status,
            renewalPeriod,
            renewalDate,
            price,
          }, idx) => (
            <Card key={`membership_card_${idx + 1}`}>
              <Header>{title}</Header>
              <Fields>
                <FieldGroup>
                  <Field label="Member Name" value={memberName} />
                  <Field label="Status" value={status} />
                </FieldGroup>
                <FieldGroup>
                  <Field label="Renewal Period" value={renewalPeriod} />
                  <Field label="Renewal Date" value={renewalDate} />
                  <Field label="Price" value={price} />
                </FieldGroup>
              </Fields>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>purchases</SectionTitle>
        <div>
          <Card>
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
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}

export default Membership;
