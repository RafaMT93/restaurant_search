import React from 'react';
import { Card, RestaurantCard, Modal } from '../components';

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
  const [modalOpened, setModalOpened] = React.useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    adaptiveHeigth: true,
  };

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
            <Input value={inputValue} onChange={({ target }) => setInputValue(target.value)} />
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
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
