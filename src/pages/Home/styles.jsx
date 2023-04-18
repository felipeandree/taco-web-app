import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 1rem;
  padding: 1rem;
`;

export const Logo = styled.div`
  display: flex;
`;

export const LogoImg = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center;
  > img {
    width: 55%;
    padding: 0
    margin: 0;
  } 
`; 

export default Container;

