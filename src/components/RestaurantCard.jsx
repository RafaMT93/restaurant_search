import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({ name, address }) => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>{name}</Title>
        <ReactStars count={5} isHalf edit={false} value={4.5} activeColor="#e7711c" />
        <Address>{address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
    </Restaurant>
  );
};

export default RestaurantCard;
