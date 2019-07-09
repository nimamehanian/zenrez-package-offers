import React, { useContext } from 'react';
import UserContext from 'components/userData';
import {
  AccountWrapper,
  SectionTitle,
  Card,
  Header,
  AccountFieldGroup,
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
            <AccountFieldGroup>
              <Field label="First Name" value={firstName} />
              <Field label="Last Name" value={lastName} />
            </AccountFieldGroup>
            <AccountFieldGroup>
              <Field label="Email" value={email} isOnlyFieldInGroup />
            </AccountFieldGroup>
            <AccountFieldGroup>
              <Field label="Phone Number" value={phoneNumber} isOnlyFieldInGroup />
            </AccountFieldGroup>
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
