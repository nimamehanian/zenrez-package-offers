import React from 'react';

const response = {
  firstName: 'Nima',
  lastName: 'Mehanian',
  email: 'nima.mehanian@gmail.com',
  phoneNumber: '(415) 797-9433',
};

const UserContext = React.createContext(response);

export default UserContext;
