import React from 'react';

import { Restaurant, RestaurantInfo, Title, Address } from './styles';

const RestaurantCard = ({ name, address }) => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>{name}</Title>
        <p>Avaliação</p>
        <Address>{address}</Address>
      </RestaurantInfo>
    </Restaurant>
  );
};

export default RestaurantCard;
