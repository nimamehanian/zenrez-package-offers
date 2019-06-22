import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from 'components/button/button';
import { $slate } from 'styles/colors';
import DataContext from 'components/data';

function AuthForm() {
  const { studioName } = useContext(DataContext);

  const AuthFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0px 0px;
    background: ${$slate};
    p {
      width: 350px;
      font-size: 12px;
      opacity: 0.7;
    }
  `;

  return (
    <AuthFormWrapper>
      sign up to take advantage of this offer!
      <Button
        text="create account"
        style={{ margin: '16px 0px 0px' }}
      />
      <p>
        {`
          By creating an account, I authorize ${studioName}
          to create a MINDBODY account on my behalf,
          which is used to schedule classes and add passes to my account.
        `}
      </p>
    </AuthFormWrapper>
  );
}

export default AuthForm;
