import React, { useContext } from 'react';
import UserContext from 'components/userData';
import {
  AccountWrapper,
  SectionTitle,
  Card,
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
        <Card>
          <Header>profile</Header>
          <Fields>
            <FieldGroup>
              <Field label="First Name" value={firstName} />
              <Field label="Last Name" value={lastName} />
            </FieldGroup>
            <Field label="Email" value={email} />
            <Field label="Phone Number" value={phoneNumber} />
          </Fields>
        </Card>
        <Card>
          <Header>payment methods</Header>
        </Card>
      </div>
    </AccountWrapper>
  );
}

export default Account;
