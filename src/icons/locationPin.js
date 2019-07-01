import React from 'react';

function LocationPin({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M256 48c-79.5 0-144 59.9-144 133.7 0 104 144 282.3 144 282.3s144-178.3 144-282.3C400 107.9 335.5 48 256 48zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"
      />
    </svg>
  );
}

export default LocationPin;
