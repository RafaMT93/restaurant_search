import React from 'react';
import { Card, RestaurantCard, Modal, MapContainer } from '../components';

import TextField, { Input } from '@material/react-text-field';
import logo from '../assets/logo.svg';
import {
  Container,
  Search,
  Logo,
  Wrapper,
  Map,
  CarouselTitle,
  Carousel,
} from './styled-component/styles';

import MaterialIcon from '@material/react-material-icon';
import restaurante from '../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [query, setQuery] = React.useState(null);
  const [modalOpened, setModalOpened] = React.useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    adaptiveHeigth: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            //onTrailingIconSelect={() => this.setState({ value: '' })}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={({ target }) => setInputValue(target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="name" />
            <Card photo={restaurante} title="name" />
            <Card photo={restaurante} title="name" />
            <Card photo={restaurante} title="name" />
            <Card photo={restaurante} title="name" />
          </Carousel>
          <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
        </Search>
        <RestaurantCard name="Nome do Restaurante" address="Endereço" />
        <RestaurantCard name="Nome do Restaurante" address="Endereço" />
        <RestaurantCard name="Nome do Restaurante" address="Endereço" />
        <RestaurantCard name="Nome do Restaurante" address="Endereço" />
        <RestaurantCard name="Nome do Restaurante" address="Endereço" />
      </Container>
      <MapContainer query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
