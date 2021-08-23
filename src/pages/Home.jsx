import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import logo from '../assets/logo.svg';
import { Container, Search } from './styles';
import styles from './Home.module.css';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo do restaurante" className={styles.img} />
        <TextField
          label="Search"
          outlined
          //onTrailingIconSelect={() => this.setState({ value: '' })}
          //trailingIcon={<MaterialIcon role="button" icon="delete" />}
        >
          <Input value={inputValue} onChange={({ target }) => setInputValue(target.value)} />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
