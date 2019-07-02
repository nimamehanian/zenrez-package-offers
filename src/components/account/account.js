import React, { useContext } from 'react';
import UserContext from 'components/userData';
import {
  AccountWrapper,
  SectionTitle,
  Section,
  Header,
  FieldGroup,
  Fields,
  Field
} from 'components/account/accountSubcomponents';

function Account() {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
  } = useContext(UserContext);

  return (
    <AccountWrapper>
      <SectionTitle>account overview</SectionTitle>
      <div>
        <Section>
          <Header>profile</Header>
          <Fields>
            <FieldGroup>
              <Field label="First Name" value={firstName} />
              <Field label="Last Name" value={lastName} />
            </FieldGroup>
            <Field label="Email" value={email} />
            <Field label="Phone Number" value={phoneNumber} />
          </Fields>
        </Section>
        <Section>
          <Header>payment methods</Header>
        </Section>
      </div>
    </AccountWrapper>
  );
}

export default Account;
