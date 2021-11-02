import React from 'react';

import {Image, Text} from 'react-native';
import Logo from '../../assets/logo2.png';
import {Container} from './styles.js';

const Header = () => {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
};

export default Header;
