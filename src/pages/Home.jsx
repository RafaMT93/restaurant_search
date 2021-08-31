import React from 'react';
import { useSelector } from 'react-redux';
import { Card, RestaurantCard, Modal, MapContainer } from '../components';

import TextField, { Input } from '@material/react-text-field';
import logo from '../assets/logo.svg';
import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
} from './styled-component/styles';

import MaterialIcon from '@material/react-material-icon';
import restaurante from '../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [query, setQuery] = React.useState(null);
  const [placeId, setPlaceId] = React.useState(null);
  const [modalOpened, setModalOpened] = React.useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={({ target }) => setInputValue(target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                onClick={() => handleOpenModal(restaurant.place_id)}
                title={restaurant.name}
              />
            ))}
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <MapContainer query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>
          {restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado'}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

export default Home;
