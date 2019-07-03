import React from 'react';

const response = {
  firstName: 'Nima',
  lastName: 'Mehanian',
  email: 'nima.mehanian@gmail.com',
  phoneNumber: '(415) 797-9433',
  memberships: [
    {
      title: 'yoga — unlimited',
      memberName: 'Nima Mehanian',
      status: 'Active (as of 4/2/19)',
      renewalPeriod: 'Monthly',
      renewalDate: 'July 9th, 2019',
      price: '$200',
    },
    {
      title: 'pilates — unlimited',
      memberName: 'Nima Mehanian',
      status: 'Inactive (as of 4/2/19)',
      renewalPeriod: 'Monthly',
      renewalDate: 'July 9th, 2019',
      price: '$200',
    },
  ],
};

const UserContext = React.createContext(response);

export default UserContext;
