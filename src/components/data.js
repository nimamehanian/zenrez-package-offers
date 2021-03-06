import React from 'react';

export const offerDetails = {
  logoUrl: 'https://res.cloudinary.com/zenrez/image/upload/v1531503228/perfect-fit/5899119cc7bec43e37f534e7/v1q5vltkjh1xf4exatxk.png',
  imageUrl: 'https://images.unsplash.com/photo-1519317245869-d6943e4a4f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  classTitle: 'yoga',
  studioName: 'Satori',
  classQuantity: 5,
  actualPrice: 75,
  retailPrice: 100,
  discount: 25,
  pricePerClass: 15,
  tax: 11.99,
  dateOfExpiration: '2019-11-11T11:11:11.111Z',
  durationValid: '6 months',
  studioDescription: 'Satori Yoga Studio, a top-rated studio, is an unpretentious urban oasis, located in the heart of San Francisco\'s Financial District. Satori offers a variety of Yoga, Massage, and Meditation classes 7 days per week. Classes are drop-in, however pre-registration for our busy lunch time classes is recommended. Whether you live, work or play in San Francisco\'s Financial District, Satori is the perfect destination for restoring a sense of calm to your day, your week and your life.',
  studioUrl: 'http://satoriyogastudio.com/',
  colors: {
    primary: '#63b99f',
    secondary: '#d682d9',
    tertiary: '#',
    __typename: 'Theme',
  },
  locations: [
    {
      studioName: 'Satori Yoga Studio',
      studioAddress: '110 Sutter St Ste 100',
      studioCityStateZip: 'San Francisco, CA 94104',
      __typename: 'Location',
    },
    {
      studioName: 'Satori Yoga Studio',
      studioAddress: '110 Sutter St Ste 100',
      studioCityStateZip: 'San Francisco, CA 94104',
      __typename: 'Location',
    },
  ],
  __typename: 'Offer',
};

export const DataContext = React.createContext(offerDetails);
