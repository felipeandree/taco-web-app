import React from 'react';
import Container, { Logo, LogoImg } from './styles';
import SearchBar from '../../components/Inputs';
import logo from '../../Assets/images/taco-img-small.png'; 

const Home = () => {
  return (
    <Container>
      <Logo>
        <LogoImg>
          <img src={logo} alt={'logo de taco web app'} />
        </LogoImg>
        
      </Logo>
      <SearchBar/>
        
      
    </Container>
  );
};

export default Home;