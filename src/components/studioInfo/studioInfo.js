import React from 'react';
import styled from 'styled-components';

function StudioInfo({
  locations,
  studioDescription,
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
    width: 320px;
    margin: 0px 24px 24px;
  `;

  const Location = styled.div`
    width: 320px;
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
    margin-bottom: 16px;
    span {
      margin: 0px 8px 0px 4px;
    }
  `;

  return (
    <StudioInfoWrapper>
      <Description>
        <Title>about this studio</Title>
        {studioDescription}
      </Description>
      <Location>
        <Title>{locations.length > 1 ? 'locations' : 'location'}</Title>
        {
          locations.map(({ studioName, studioAddress, studioCityStateZip }, idx) => (
            <LocationWrapper key={`location_${idx + 1}`}>
              <span role="img" aria-label="location">📍</span>
              <div>
                <Name>{studioName}</Name>
                <div>{studioAddress}</div>
                <div>{studioCityStateZip}</div>
              </div>
            </LocationWrapper>
          ))
        }
      </Location>
    </StudioInfoWrapper>
  );
}

export default StudioInfo;
