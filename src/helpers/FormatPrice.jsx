import React from 'react';

const FormatPrice = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 2,
  }).format(price / 100);

  // Manually add the Taka sign
  return formattedPrice ;
};

export default FormatPrice;