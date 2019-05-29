import React from 'react';
import styled from 'styled-components';

function StudioInfo({
  description,
  name,
  address,
  cityStateZip,
}) {
  const StudioInfoWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 24px;
  `;

  const Description = styled.div`
    width: 375px;
    margin: 0px 24px 24px;
  `;

  const Location = styled.div`
    width: 375px;
    margin: 0px 24px 24px;
    span {
      font-size: 32px;
    }
  `;

  const Title = styled.div`
    font-family: 'Apercu Med';
    text-transform: uppercase;
    margin-bottom: 8px;
  `;

  const Name = styled.div`
    font-family: 'Apercu Med';
  `;

  const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      margin: 0px 8px 0px 4px;
    }
  `;

  return (
    <StudioInfoWrapper>
      <Description>
        <Title>about this studio</Title>
        {description}
      </Description>
      <Location>
        <Title>location(s)</Title>
        <LocationWrapper>
          <span role="img" aria-label="location">📍</span>
          <div>
            <Name>{name}</Name>
            <div>{address}</div>
            <div>{cityStateZip}</div>
          </div>
        </LocationWrapper>
      </Location>
    </StudioInfoWrapper>
  );
}

export default StudioInfo;
