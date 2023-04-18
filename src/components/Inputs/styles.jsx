import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #bbb;
  }
`;

export const SearchIcon = styled.div`
padding: 0.7rem 0.4rem; 
position: absolute;
box-sizing:border-box;
transform: translateY(-10%);
`;

export default SearchInput;