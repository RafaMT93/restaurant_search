import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../assets/restaurante-fake.png';
import Skeleton from './Skeleton';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = (props) => {
  const { restaurant, onClick } = props;
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c" />
        <Address>{restaurant.formatted_address || restaurant.vicinity}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt="Foto do Restaurante"
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px;" />}
    </Restaurant>
  );
};

export default RestaurantCard;
