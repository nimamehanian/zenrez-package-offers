import React from 'react';
import Hero from 'components/hero/hero';
import OfferExpirationTimer from 'components/offerExpirationTimer/offerExpirationTimer';
import StudioInfo from 'components/studioInfo/studioInfo';

function OfferDetailsPage({ data }) {
  const {
    dateOfExpiration,
    studioDescription,
    studioName,
    studioAddress,
    studioCityStateZip,
  } = data;

  return (
    <div>
      <Hero />
      <OfferExpirationTimer dateOfExpiration={dateOfExpiration} />
      <StudioInfo
        description={studioDescription}
        name={studioName}
        address={studioAddress}
        cityStateZip={studioCityStateZip}
      />
    </div>
  );
}

export default OfferDetailsPage;
