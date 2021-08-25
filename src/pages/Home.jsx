import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import logo from '../assets/logo.svg';
import { Container, Search, Logo, Wrapper, Map } from './styled-component/styles';
import MaterialIcon from '@material/react-material-icon';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
